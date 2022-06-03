var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var imgModel = require('./models/model');
var multer = require('multer');
var cors = require('cors');
var fs = require('fs');
var path = require('path');
require('./routes/home')(app);
require('./routes/admin')(app);
require('./routes/signUp')(app);
require('dotenv/config');
mongoose.connect(process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }, err => {
        console.log('connected')
    });
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Set EJS as templating engine 
app.set("view engine", "ejs");
  
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
  
var upload = multer({ storage: storage });
app.get('/api/getdata', (req, res) => {
    imgModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            if(items[0]!== undefined)
            res.send({postImgBase64: Buffer.from(items[0].img.data).toString('base64')})
        }
    });
});
app.post('/api/postdata', upload.single('image'), (req, res, next) => {
    console.log(req.file)
    var obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imgModel.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            console.log("imgModel Created")
            res.redirect('http://localhost:3000/');
        }
    });
});
var port = process.env.PORT || '5000'
app.listen(port, err => {
    if (err)
        throw err
    console.log('Server listening on port', port)
})