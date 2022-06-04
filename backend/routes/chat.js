var bodyParser = require('body-parser');
var conversation = require('../models/chat');
var cors = require('cors');
require('dotenv/config');
module.exports = function(app){
    app.use(cors())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    app.post('/api/sendmessage', async(req, res) =>{
        var myData;
        var obj = {
            text:req.body.data.text,
            senderid:req.body.data.myid,
            receiverid:req.body.data.profileid,
        }
        
        console.log(obj)
        myData = await conversation.findOne({$and:[{members:{ $elemMatch: {$eq: req.body.data.myid} }},{members:{ $elemMatch: {$eq: req.body.data.profileid} }}]}).clone();
        
        myData.messages.push(obj);
        await conversation.findOneAndUpdate({$and:[{members:{ $elemMatch: {$eq: req.body.data.myid} }},{members:{ $elemMatch: {$eq: req.body.data.profileid} }}]},myData).clone()
        console.log("message sent")
        res.send("message sent")

    })
    app.get('/api/getmymessages/', async(req, res) => {
        var myData;
        myData = await conversation.find({members:{ $elemMatch: {$eq: req.query.myid} }}).clone();
        res.send(myData);
    });
}
