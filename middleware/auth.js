const  jwt  = require("jsonwebtoken");
const User = require("../Models/User");

//checking if a user going to login is autheticated or not means we have its data or not
//checking the user which is login do the operations or any other user do it

exports.isAuthenticated = async(req, res, next)=>{

    try {
        const {token} = req.cookies;
        //getting the token from the cookies.

        if(!token) {
        return res.status(401).json({
            success: false,
            message: "You are not logged in"
        });

    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    
    //as we made the token using user._id so when it decoded/verify it will return id

    req.user = await User.findById(decoded._id);
    next();

    //next represent here the next middleware function to call when
    //auth.js works fine

    } catch (error) {
        res.status(500).json({
            message:error.message,
        })
    }
    
}