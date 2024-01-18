const mongoose = require("mongoose");
//import mongoose to use mongodb

exports.connectDatabase = () => {
    mongoose
        .connect(process.env.MONGO)
        .then((con) => console.log(`Database Connected:`))
        .catch((err) => console.log(err));
}

//.connect(import the mongouri from env file)
//printing the res from the backend
//if any error then handling it
