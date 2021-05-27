const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send("Hello from my channel");
});

app.get('/about',function(req, resp){
    resp.send("This is about page")
});

app.post('/login', function(req, resp){
    resp.send("This is login page");
});

app.listen(4500);
