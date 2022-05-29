 const mongoose = require("mongoose"); //import mongoose
 const bcrypt = require("bcrypt");


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

 userSchema.pre("save", async function(next) {

 })

 module.exports = mongoose.model("Users", userSchema);