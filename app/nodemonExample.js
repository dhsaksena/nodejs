var http = require('http');
http.createServer(function(req, resp){
    resp.write('Hello testdd 123');
    resp.end();
}).listen(4000);