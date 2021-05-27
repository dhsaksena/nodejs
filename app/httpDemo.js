var http = require('http');
var uc = require('upper-case');
http.createServer(function(req,resp){
   
    resp.writeHead(200,'Content-type: application\json')
    resp.write(uc.upperCase('dhryvgdg'));

    resp.end();
}).listen(3000);