
var userProfile = require('../models/profile');
var conversation = require('../models/chat');
var blindProfile = require('../models/blindDate')

require('dotenv/config');
module.exports = function(app) {
    
    app.post('/api/getblinddate/', async(req, res) => {
        var myData;
        var myId = req.body.myid;
        var blindData;
        var blindDateProfile;
        var genderPrefference
        console.log(req.body.myid)
        myData = await userProfile.findOne({userid:req.body.myid}).select({ "_id": 0}).clone();
        blindData = await  blindProfile.findOne({userid:req.body.myid}).select({ "userid": 1}).clone();
        if(!blindData){
            await blindProfile.create(myData)
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
            myData.matches.push(blindDateProfile.userid);
            myData.liked.push(blindDateProfile.userid);
            await userProfile.findOneAndUpdate({$and:[{userid:blindDateProfile.userid},{matches:{$ne:req.body.likedData.myid }}]},blindDateProfile).clone()
            await userProfile.findOneAndUpdate({$and:[{userid: req.body.likedData.myid},{liked:{$ne:req.body.likedData.profileid }},{matches:{$ne:req.body.likedData.profileid }}]},myData).clone()
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