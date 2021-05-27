const express = require('express');
const app = express();


function checkUrl(req, resp, next)
{
    console.log("The URL is "+ req.originalUrl);
    next();
}

app.use(checkUrl);

app.get('/', function(req, resp){
    resp.send("This is homepage");
});

app.get('/login', function(req, resp){
    resp.send("This is login page");
});


app.get('/about', function(req, resp){
    resp.send("This is about page");
});

app.listen(4500);