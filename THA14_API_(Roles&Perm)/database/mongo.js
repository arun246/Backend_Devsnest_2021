//start mongodb server Win7-32bit
//mongod --dbpath "go to mongo/bin" --storageEngine "mmapv1" //for mongoDB service

var mongoose = require('mongoose');

var mongodb = 'mongodb://localhost:27017/users';

mongoose.connect(mongodb,{ useUnifiedTopology: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console,"Mongodb connection erro"));
db.once("open", function () {
    console.log("Connected successfully to mongo");
  });