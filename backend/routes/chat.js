var bodyParser = require('body-parser');
var conversation = require('../models/chat');
var userProfile = require('../models/profile');
var cors = require('cors');
require('dotenv/config');
module.exports = function(app){
    app.use(cors())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    app.post('/api/sendmessage', async(req, res) =>{
        try{var myData;
            var obj = {
                text:req.body.data.text,
                senderid:req.body.data.myid,
                receiverid:req.body.data.profileid,
            }
            myData = await conversation.findOne({$and:[{members:{ $elemMatch: {$eq: req.body.data.myid} }},{members:{ $elemMatch: {$eq: req.body.data.profileid} }}]}).clone();
            myData.messages.push(obj);
            await conversation.findOneAndUpdate({$and:[{members:{ $elemMatch: {$eq: req.body.data.myid} }},{members:{ $elemMatch: {$eq: req.body.data.profileid} }}]},myData).clone();
            res.send("message sent");
        }
        catch(ex){
            res.send("Something went wrong.");
        }
        

    })
    app.get('/api/getmymessages/', async(req, res) => {
        try{
            var myData;
            var singleMessagesData;
            var finalDataToSend=[];
            var image;
            myData = await conversation.find({members:{ $elemMatch: {$eq: req.query.myid} }}).clone();
            for(var i=0; i<myData.length;i++){
                if(myData[i].members[0]===req.query.myid){
                    image = await userProfile.findOne({userid:myData[i].members[0]}).selected({"img":1});
                    singleMessagesData = {
                        members:myData[i].members,
                        messages:myData[i].messages,
                        image:Buffer.from(image.data).toString('base64')
                    };
                }
                else{
                    image = await userProfile.findOne({userid:myData[i].members[1]}).selected({"img":1});
                    singleMessagesData = {
                        members:myData[i].members,
                        messages:myData[i].messages,
                        image:Buffer.from(image.data).toString('base64')
                    };
                }
                finalDataToSend.push(singleMessagesData);
            }
            res.send(myData);
        }
        catch(er){
            res.send("Something went wrong.");
        }
    });
}
