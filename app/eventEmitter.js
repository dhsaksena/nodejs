var fs = require("fs");
var rs = fs.createReadStream('./events.txt');

rs.on('open', function(){
    console.log("Demo file is open");
});