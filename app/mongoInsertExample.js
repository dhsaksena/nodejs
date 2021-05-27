const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/Users');

mongoose.connect('mongodb+srv://dhruv:dhruv@cluster0.kgzir.mongodb.net/dhruv?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => { console.log("Database connection done") });


const data = new User({
    _id: new mongoose.Types.ObjectId(),
    name: "Tony",
    email: "tony@stark.com",
    address: "stark tower"
});

data.save().then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});


   
