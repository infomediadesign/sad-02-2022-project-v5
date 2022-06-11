var usercredentials = require('../models/usermodel');
var reportedUsers = require('../models/reports');
var userProfile = require('../models/profile');
require('dotenv/config');
module.exports = function(app){
    
    app.get('/api/getallusers', (req, res) => {
        try{
            let a = usercredentials.find({}).select({ "email": 1, "isAdmin":1, "_id":1});
            a.exec(function (err, items) {
                if (err) {
                    res.status(500).send('An error occurred', err);
                };
                res.send(items);
            });
        }
        catch(er){
            res.send("Something went wrong.");
        }
        
    });
    app.post('/api/addadmin', (req, res, next) => {
        try{
            var obj = {
                email: req.body.email,
                password: req.body.password,
                isAdmin: (Boolean)(req.body.isAdmin)
            }
            usercredentials.create(obj, (err, item) => {
                if (err) {
                    console.log(err);
                }
                else {
                    //userProfile.save();
                    console.log("Admin Created")
                }
            });
        }
        catch(er){
            res.send("Something went wrong.");
        }
    });
    app.post('/api/deleteuser', async(req, res) => {
            await usercredentials.deleteOne({email: req.body.params.myid});
            await userProfile.deleteOne({userid: req.body.params.myid})
    });
    app.get('/api/getreports', async(req, res) => {
        try{
            var reportedUsersData;
            reportedUsersData = await reportedUsers.find();
            res.send(reportedUsersData)
        }
        catch(er){
            res.send("Something went wrong.");
        }
    });
}
