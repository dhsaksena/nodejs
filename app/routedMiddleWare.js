const express = require('express');
const app = express();



var urlCheck = require('./middleware');


app.get("/", function(req, resp){
    resp.send("This is homepage");
});

app.get("/login", urlCheck, function(req, resp){
    resp.send("This is login page");
});

app.get("/about", function(req, resp){
    resp.send("This is about page");
});

app.listen(4500);