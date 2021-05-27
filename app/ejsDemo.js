const express = require('express');
const app = express();


app.set("view engine", "ejs");

app.get("/profile/:name", function(req, resp){
    
    console.log(req.params.name)
    resp.render("home", {name : req.params.name});
});

app.listen(4500);