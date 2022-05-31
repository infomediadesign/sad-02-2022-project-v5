var mongoose = require('mongoose');
  
var userProfile = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId, ref:'User'
     },
    name: String,
    about: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});
  
//Image is a model which has a schema imageSchema
  
module.exports = userProfile;