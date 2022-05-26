var mongoose = require('mongoose');
  
var userProfile = new mongoose.Schema({
    name: String,
    about: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});
  
//Image is a model which has a schema imageSchema
  
module.exports = new mongoose.model('User', userProfile);