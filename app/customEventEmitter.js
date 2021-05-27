var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on("speak",function(name){
    console.log(name.age, " is speaking");
});


eventEmitter.on("cry",function(name){
    console.log(name.name, " is crying");
});

eventEmitter.emit("cry",{name:"sdd11dd",age:34});
eventEmitter.emit("speak",{name:"sdd",age:34});