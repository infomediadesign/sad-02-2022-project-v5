var bodyParser = require('body-parser');
var userProfile = require('../models/profile');
var conversation = require('../models/chat');
var cors = require('cors');
require('dotenv/config');
module.exports = function(app){
    app.use(cors())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    
    var likedUserData;
    app.post('/api/postuserliked', async(req, res)=>{
        var myData;
        console.log(req.body.data)
        myData = await userProfile.findOne({userid:req.body.data.myid}).select({ "liked": 1, "matches":1}).clone();
        likedUserData = await userProfile.findOne({userid:req.body.data.profileid,liked:req.body.data.myid}).select({ "liked": 1, "matches":1}).clone();
        if(likedUserData){
            likedUserData.matches.push(req.body.data.myid)
            myData.matches.push(req.body.data.profileid);
            await userProfile.findOneAndUpdate({$and:[{userid:req.body.data.profileid},{matches:{$ne:req.body.data.myid }}]},likedUserData).clone()
            myData.liked.push(req.body.data.profileid);
            await userProfile.findOneAndUpdate({$and:[{userid: req.body.data.myid},{liked:{$ne:req.body.data.profileid }},{matches:{$ne:req.body.data.profileid }}]},myData).clone()
            var obj = {members:[req.body.data.myid,req.body.data.profileid],messages:[]}
            const query = {}
            const options = {
            upsert: true,
            new: true,
            setDefaultsOnInsert: true
            };
            await conversation.findOneAndUpdate(query, obj, options, (error, result) => {
                if (error) {
                  return;
                }
              }).clone()
            console.log(obj)
            res.send("User matched")
        }
        else{
            myData.liked.push(req.body.data.profileid);
            await userProfile.findOneAndUpdate({$and:[{userid: req.body.data.myid},{liked:{$ne:req.body.data.profileid }}]},myData).clone()
            console.log(" User liked")
            res.send("User liked")
        }

    })

    app.post('/api/postuserdisliked', async(req, res) =>{
        var myData;
        console.log(req.body.data)
        myData = await userProfile.findOne({userid:req.body.data.myid}).select({ "disliked": 1}).clone();
        myData.disliked.push(req.body.data.profileid);
        await userProfile.findOneAndUpdate({$and:[{userid: req.body.data.myid},{disliked:{$ne:req.body.data.profileid }}]},myData).clone()
        console.log("User disliked")
        res.send("User disliked")

    })
    app.get('/api/getuserprofile/', async(req, res) => {
        var myData;
        var myId = req.query.myid;
        var genderPrefference
        console.log(req.query.myid)
    myData = await userProfile.findOne({userid:req.query.myid}).select({"disliked": 1, "liked": 1,"findwithin":1,"preferredgender":1,"location":1}).clone();
        if(myData.preferredgender === 'everyone'){
            genderPrefference = ['man','everyone','woman']
        }
        else{
            genderPrefference = [myData.preferredgender]
        }
        userProfile.find({
           location:{
               $near:{
                $maxDistance: myData.findwithin * 1000,
                $geometry : {
                  type : 'Point',
                  coordinates:[49.409380, 8.683539]
                }
               }
           },
           gender:{$in:genderPrefference},
           $and:[{userid: {$nin: myData.liked}},{userid:{$nin: myData.disliked}},{userid:{ $ne: myId }}]

        }, (err, items) => {
            if (err) {
                console.log(err);
                res.status(500).send('An error occurred', err);
            }
            else {
                    // res.send({postImgBase64: Buffer.from(items[0].img.data).toString('base64'),data:items})
                    res.send({data:items,mylocation:myData.location})
            }
        }).clone();
    });
}
