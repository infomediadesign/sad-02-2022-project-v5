var bodyParser = require('body-parser');
var userProfile = require('../models/profile');
var conversation = require('../models/chat');

require('dotenv/config');
module.exports = function(app) {

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    
    var likedUserData;
    app.post('/api/postuserliked', async(req, res)=>{
        var myData;
        console.log(req.body.likedData)
        myData = await userProfile.findOne({userid:req.body.likedData.myid}).select({ "liked": 1, "matches":1}).clone();
        likedUserData = await userProfile.findOne({userid:req.body.likedData.profileid,liked:req.body.likedData.myid}).select({ "liked": 1, "matches":1}).clone();
        if(likedUserData){
            likedUserData.matches.push(req.body.likedData.myid)
            myData.matches.push(req.body.likedData.profileid);
            await userProfile.findOneAndUpdate({$and:[{userid:req.body.likedData.profileid},{matches:{$ne:req.body.likedData.myid }}]},likedUserData).clone()
            myData.liked.push(req.body.likedData.profileid);
            await userProfile.findOneAndUpdate({$and:[{userid: req.body.likedData.myid},{liked:{$ne:req.body.likedData.profileid }},{matches:{$ne:req.body.likedData.profileid }}]},myData).clone()
            var obj = {members:[req.body.likedData.myid,req.body.likedData.profileid],messages:[]}
            // const query = {}
            // const options = {
            // upsert: true,
            // new: true,
            // setDefaultsOnInsert: true
            // };
            // await conversation.findOneAndUpdate(query, obj, options, (error, result) => {
            //     if (error) {
            //       return;
            //     }
            //   }).clone()
            var createdAlready = await conversation.findOne({$and:[{members:req.body.data.profileid},{members:req.body.data.myid }]})
            if(!createdAlready){
                await conversation.create(obj);
            }
            console.log(obj)
            res.send("User matched")
        }
        else{
            myData.liked.push(req.body.likedData.profileid);
            await userProfile.findOneAndUpdate({$and:[{userid: req.body.likedData.myid},{liked:{$ne:req.body.likedData.profileid }}]},myData).clone()
            console.log(" User liked")
            res.send("User liked")
        }

    })

    app.post('/api/postuserdisliked', async(req, res) =>{
        var myData;
        console.log(req.body)
        myData = await userProfile.findOne({userid:req.body.dislikedData.myid}).select({ "disliked": 1}).clone();
        myData.disliked.push(req.body.dislikedData.profileid);
        await userProfile.updateOne({$and:[{userid: req.body.dislikedData.myid},{disliked:{$ne:req.body.dislikedData.profileid }}]},myData).clone()
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
            genderPrefference = ['man','other','woman']
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
                var finalData = [];
                for(var i=0;i<items.length;i++)
                {
                    var obj = {
                        name: items[i].name,
                        userid: items[i].userid,
                        about: items[i].about,
                        location: items[i].location,
                        findwithin:items[i].findwithin,
                        passion:items[i].passion,
                        bestdrink:items[i].bestdrink,
                        education:items[i].education,
                        foodpreferences:items[i].foodpreferences,
                        bestpets:items[i].bestpets,
                        smoking:items[i].smoking,
                        Socialmedia:items[i].Socialmedia,
                        gender:items[i].gender,
                        preferredgender:items[i].preferredgender,
                        dob:items[i].dob,
                        img: Buffer.from(items[i].img.data).toString('base64')
                    }
                    finalData.push(obj)
                }
                res.send({data:finalData,mylocation:myData.location})
            }
        }).clone();
    });
}