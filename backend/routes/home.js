var bodyParser = require('body-parser');
var userProfile = require('../models/profile');
var multer = require('multer');
var fs = require('fs');
var cors = require('cors');
var path = require('path');
require('dotenv/config');
module.exports = function(app){
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(cors())
    
    // Set EJS as templating engine 
    app.set("view engine", "ejs");
      
    var storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads')
        },
        filename: (req, file, cb) => {
            cb(null, file.fieldname + '-' + Date.now())
        }
    });
      
    var upload = multer({ storage: storage });
    app.get('/api/getuserprofile', (req, res) => {
        // userProfile.find({}, (err, items) => {
        //     if (err) {
        //         console.log(err);
        //         res.status(500).send('An error occurred', err);
        //     }
        //     else {
        //         if(items[0]!== undefined){
        //             res.send({postImgBase64: Buffer.from(items[0].img.data).toString('base64'),data:items})
        //         }
        //     }
        // });
        
        userProfile.find({
           location:{
               $near:{
                $maxDistance: 50000,
                $geometry : {
                  type : 'Point',
                  coordinates:[49.409380, 8.683539]
                }
               }
           } 

        }, (err, items) => {
            if (err) {
                console.log(err);
                res.status(500).send('An error occurred', err);
            }
            else {
                if(items[0]!== undefined){
                    res.send({data:items})
                }
            }
        });
    });
    // app.post('/api/addprofile', upload.single('image'), (req, res, next) => {
    //     console.log(req.file)
    //     var obj = {
    //         name: req.body.name,
    //         about: req.body.about,
    //         gender: req.body.gender,
    //         preferredgender: req.body.preferredgender,
    //         dob: req.body.dob,
    //         location: {
    //             type:"Point",
    //             coordinates:[49.409380, 8.683539]},
    //         img: {
    //             data: fs.readFileSync(path.join(__dirname + '/../uploads/' + req.file.filename)),
    //             contentType: 'image/png'
    //         }
    //     }
    //     userProfile.create(obj, (err, item) => {
    //         if (err) {
    //             console.log(err);
    //         }
    //         else {
    //             //userProfile.save();
    //             console.log("User Created")
    //             res.redirect('http://localhost:3000/');
    //         }
    //     });
    // });
}
