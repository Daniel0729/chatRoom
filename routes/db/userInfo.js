var mongoose = require('mongoose');

// mongoDB schema
var userInfoSchema = new mongoose.Schema({
    name: String,
    password: String,
    date: Date,
    content: String
});
// variable ready to use
var userInfo = module.exports = mongoose.model('userInfo', userInfoSchema);