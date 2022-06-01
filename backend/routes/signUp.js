var bodyParser = require('body-parser');
var userProfile = require('../models/profile');
var multer = require('multer');
var fs = require('fs');
var path = require('path');
require('dotenv/config');
module.exports = function(app){
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
      
    var storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads')
        },
        filename: (req, file, cb) => {
            cb(null, file.fieldname + '-' + Date.now())
        }
    });
      
    var upload = multer({ storage: storage });
    
    app.post('/api/addprofile', upload.single('image'), (req, res, next) => {
        console.log(req.file)
        
        var obj = {
            name: req.body.name,
            about: req.body.about,
            gender: req.body.gender,
            preferredgender: req.body.preferredgender,
            dob: req.body.dob,
            location: {
                type:"Point",
                coordinates:[49.409380, 8.683539]},
            img: {
                data: fs.readFileSync(path.join(__dirname + '/../uploads/' + req.file.filename)),
                contentType: 'image/png'
            }
        }
        userProfile.create(obj, (err, item) => {
            if (err) {
                console.log(err);
            }
            else {
                //userProfile.save();
                console.log("User Created")
                res.redirect('http://localhost:3000/');
            }
        });
    });
}
