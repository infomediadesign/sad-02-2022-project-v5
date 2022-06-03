const mongoose = require("mongoose"); //import mongoose



 //user schema

 const userSchema = new mongoose.Schema({

     email: {

         type: String,

         required: [true, "Email is required"],

         unique: true,

     },

     password: {

         type: String,

         required: [true, "Password is required"],

     },
     isAdmin: {

         type: Boolean,
         default: false,
     },

 });



 module.exports = mongoose.model("Users", userSchema);