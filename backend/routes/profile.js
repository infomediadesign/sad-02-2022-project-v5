var bodyParser = require('body-parser');
var userProfile = require('../models/profile');
var cors = require('cors');
require('dotenv/config');
module.exports = function(app){
    app.use(cors())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.get('/api/getmyprofile/', async(req, res) => {
        var myData;
        myData = await userProfile.findOne({userid:req.query.myid});
        res.send(myData)
    });
}
