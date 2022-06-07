
var userProfile = require('../models/profile');
var conversation = require('../models/chat');
var blindProfile = require('../models/blindDate')

require('dotenv/config');
module.exports = function(app) {
    
    app.post('/api/getblinddate/', async(req, res) => {
        var myData;
        var myId = req.body.myid;
        var blindData;
        var myblindData;
        var blindDateProfile;
        var genderPrefference
        myData = await userProfile.findOne({userid:req.body.myid}).clone();
        blindData = await  blindProfile.findOne({userid:req.body.myid}).select({ "userid": 1}).clone();
        if(!blindData){
            var blindObj = {
                name: myData.name,
                userid: myData.userid,
                about: myData.about,
                location: myData.location,
                findwithin:myData.findwithin,
                passion:myData.passion,
                bestdrink:myData.bestdrink,
                education:myData.education,
                foodpreferences:myData.foodpreferences,
                bestpets:myData.bestpets,
                smoking:myData.smoking,
                Socialmedia:myData.Socialmedia,
                gender:myData.gender,
                preferredgender:myData.preferredgender,
                dob:myData.dob,
                img: myData.img
            }
            await blindProfile.create(blindObj)
            myblindData = await blindProfile.findOne({userid:req.body.myid}).select({"userid":1,"matches":1,"liked":1})
        }
        if(myData.preferredgender === 'everyone'){
            genderPrefference = ['man','everyone','woman']
        }
        else{
            genderPrefference = [myData.preferredgender]
        }
        blindDateProfile = await blindProfile.findOne({
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
        }).select({ "liked": 1, "matches":1,"userid":1}).clone();
        if(blindDateProfile){
            blindDateProfile.matches.push(req.body.myid)
            blindDateProfile.liked.push(req.body.myid)
            myblindData.matches.push(blindDateProfile.userid);
            myblindData.liked.push(blindDateProfile.userid);
            await blindProfile.findOneAndUpdate({$and:[{userid:blindDateProfile.userid},{liked:{$ne:req.body.myid }},{matches:{$ne:req.body.myid }}]},blindDateProfile).clone()
            await blindProfile.findOneAndUpdate({$and:[{userid: req.body.myid},{liked:{$ne:blindDateProfile.userid }},{matches:{$ne:blindDateProfile.userid }}]},myblindData).clone()
            var obj = {members:[req.body.myid,blindDateProfile.userid],messages:[]}
            var createdAlready = await conversation.findOne({$and:[{members:blindDateProfile.userid},{members:req.body.myid }]})
            if(!createdAlready){await conversation.create(obj);}
            res.send("Found a date!!!")
        }
        else{
            res.send("You are added.")
        }
    });
}