var http = require('http');
var fs = require('fs');

http.createServer(function(req, resp){
    fs.readFile('demo.html',function(err, data){
    resp.writeHead(200,'Content-type:application/html');
    resp.write(data);  
    resp.end()  
    })
}).listen(3000)