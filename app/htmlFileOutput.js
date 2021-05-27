const express = require('express');
const app = express();

app.get("/", function(req, resp){
    resp.sendFile(__dirname + "/html/home.html");
});


app.listen(4500);