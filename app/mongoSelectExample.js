

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./Users');

mongoose.connect('mongodb+srv://dhruv:dhruv@cluster0.kgzir.mongodb.net/dhruv?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => { console.log("Database connection done") });


User.find({}, function(err, users){
    if(err)
    {
        console.log("Error in processing");
    }
    else
    {
        console.log(users);
    }
});