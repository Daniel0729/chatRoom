var mongoose = require('mongoose');
var dbUrl = 'mongodb://localhost:27017/chat';

// connnect ot db
mongoose.connect(dbUrl);

// if DB running successfully
mongoose.connection.on('connected', function () {
    console.log('MongoDB is now running on port 27017!');
});

// if DB throws a err
mongoose.connection.on('err', function (err) {
    console.log('MongoDB gets err' + err);
});

// if DB disconnnect
mongoose.connection.on('disconnected', function () {
    console.log('MongoDB is now disconnected!');
});

// if Node process ends, close DB connection
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('MongoDB is now disconnected due to NodeJS ends!');
        process.exit(0);
    });
});

require('./userInfo');