const express = require("express");
const {
  createPost,
  likeAndUnlikePost,
  deletePost,
  postoffollowing,
  updateCaption,
  deletecomment,
  addComment,
} = require("../Controllers/post");
const { isAuthenticated } = require("../middleware/auth");

const router = express.Router();

router.route("/post/upload").post(isAuthenticated, createPost);

router
  .route("/post/:id")
  .get(isAuthenticated, likeAndUnlikePost)
  .delete(isAuthenticated, deletePost)
  .put(isAuthenticated, updateCaption);

router.route("/posts").get(isAuthenticated, postoffollowing);
router
  .route("/post/comment/:id")
  .put(isAuthenticated, addComment)
  .post(isAuthenticated, deletecomment);

module.exports = router;
