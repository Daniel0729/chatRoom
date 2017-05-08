var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
mongoose.Promise = global.Promise;
// userSchema is stored into unserInfo.js
var userInfo = require('./db/userInfo');

router.get('/', function (req, res, next) {
    res.sendFile(path.join('D:/self_project/express_practice/Practice02/views/chatRoom.html'));
});

// add new data into database
router.post('/insert', function (req, res, next) {
    var item = {
        name: req.body.name,
        password: req.body.password
    };
    var data = new userInfo(item);
    data.save(console.log("data has been added into database!!"));
    res.redirect('/chat');
});

// del a data in database
router.post('/del', function (req, res, next) {
    var id = req.body.id;
    userInfo.findByIdAndRemove(id).exec(console.log("data has been removed!"));
    res.redirect('/chat');
});

// check whether data has been written into database
router.get('/get-data', function(req, res, next) {
    userInfo.find()
        .then(function(doc) {
            res.send(doc);
        });
});


module.exports = router;