var bodyParser = require('body-parser');
var conversation = require('../models/chat');
var cors = require('cors');
require('dotenv/config');
module.exports = function(app){
    app.use(cors())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    app.post('/api/sendmessage', async(req, res) =>{
        try{var myData;
            var obj = {
                text:req.body.sentMsgData.text,
                senderid:req.body.sentMsgData.myid,
                receiverid:req.body.sentMsgData.profileid,
            }
            myData = await conversation.findOne({$and:[{members:{ $elemMatch: {$eq: req.body.sentMsgData.myid} }},{members:{ $elemMatch: {$eq: req.body.sentMsgData.profileid} }}]}).clone();
            myData.messages.push(obj);
            await conversation.findOneAndUpdate({$and:[{members:{ $elemMatch: {$eq: req.body.sentMsgData.myid} }},{members:{ $elemMatch: {$eq: req.body.sentMsgData.profileid} }}]},myData).clone();
            res.send("message sent");
        }
        catch(ex){
            res.send("Something went wrong.");
        }
        

    })
    app.get('/api/getmymessages/', async(req, res) => {
        try{
            var myData;
            myData = await conversation.find({members:{ $elemMatch: {$eq: req.query.myid} }}).clone();
            res.send(myData);
        }
        catch(er){
            res.send("Something went wrong.");
        }
    });
}
