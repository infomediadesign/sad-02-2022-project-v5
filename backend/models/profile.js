var mongoose = require('mongoose');
var userProfile = new mongoose.Schema({
    name: String,
    about: String,
    img:
    {
        data: Buffer,
        contentType: String
    },
    location: {
        type: { type: String },
        coordinates: []
       },
    gender:String,
    preferredgender:String,
    dob:String
});
userProfile.index({ location: "2dsphere" });
//Image is a model which has a schema imageSchema
  
module.exports = new mongoose.model('User', userProfile);