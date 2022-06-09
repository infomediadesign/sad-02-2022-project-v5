var bodyParser = require('body-parser');
var userProfile = require('../models/profile');
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var cors = require('cors');
require('dotenv/config');
module.exports = function(app){
    app.use(cors())
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
    app.get('/api/getmyprofile/', async(req, res) => {
        var myData;
        myData = await userProfile.findOne({userid:req.query.myid});
        res.send(myData)
    });
    
    app.post('/api/updateprofiledetails', upload.single('file'), async(req, res) => {
        console.log(req.body)
            var locationData = req.body.location.split(',');
            if(req.file!= undefined)
            {
                var obj = {
                    name: req.body.name,
                    about: req.body.about,
                    location: {
                        type:"Point",
                        coordinates: [(Number)(locationData[1]),(Number)(locationData[0])]
                    },
                    findwithin:req.body.findwithin,
                    gender:req.body.gender,
                    preferredgender:req.body.preferredgender,
                    dob:req.body.dob,
                    img: {
                        data: fs.readFileSync(path.join(__dirname + '/../uploads/' + req.file.filename)),
                        contentType: 'image/png'
                    }
                }
            }
            else{

            var obj = {
                name: req.body.name,
                about: req.body.about,
                location: {
                    type:"Point",
                    coordinates: [(Number)(locationData[1]),(Number)(locationData[0])]
                },
                findwithin:req.body.findwithin,
                gender:req.body.gender,
                preferredgender:req.body.preferredgender,
                dob:req.body.dob
            }
            }

            await userProfile.findOneAndUpdate({userid:req.body.userid},obj)
            console.log(obj)
            console.log(req.body.userid)
            console.log("Profile Updated")
            

    });
    app.post('/api/updateprofilequestionaire',  async(req, res) => {
        console.log(req.body);
            var obj = {
                passion:req.body.passion,
                bestdrink:req.body.bestdrink,
                education:req.body.education,
                foodpreferences:req.body.foodpreferences,
                bestpets:req.body.bestpets,
                smoking:req.body.smoking,
                Socialmedia:req.body.Socialmedia,
            }
            await userProfile.findOneAndUpdate({userid:req.body.userid},obj)
            console.log("Profile Updated")

    });
}
