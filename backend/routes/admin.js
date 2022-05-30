var usercredentials = require('../models/user');
require('dotenv/config');
module.exports = function(app){
    app.get('/api/getallusers', (req, res) => {
        let a = usercredentials.find({}).select({ "email": 1, "password": 1,"isAdmin":1, "_id":0});
        a.exec(function (err, items) {
            if (err) {
                console.log("Error")
                console.log(err);
                res.status(500).send('An error occurred', err);
            };
            console.log("received here")
            res.send(items);
        });
    });
    // app.get('/api/getallusers', (req, res) => {
    //     usercredentials.find({}, (err, items) => {
    //         if (err) {
    //             console.log("Error")
    //             console.log(err);
    //             res.status(500).send('An error occurred', err);
    //         }
    //         else {
    //             console.log(items)
    //             res.send({data:items})
    //         }
    //     });
    // });
    app.post('/api/addadmin', (req, res, next) => {
        console.log(req.body)
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
                res.redirect('http://localhost:3000/');
            }
        });
    });
    app.post('/api/deleteuser', (req, res, next) => {
        console.log(req.body)
        var obj = {
            email: req.body.email,
            password: req.body.password,
            isAdmin: (Boolean)(req.body.isAdmin)
        }
        usercredentials.deleteOne(obj, (err, item) => {
            if (err) {
                console.log(err);
            }
            else {
                //userProfile.save();
                console.log("User Deleted")
                res.redirect('http://localhost:3000/');
            }
        });
    });
}
