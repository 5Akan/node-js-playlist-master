var events = require('events');

var myEmmitter = new events.EventEmitter();//Creation of a new event emmitter object

myEmmitter.on('anEvent',function(msg){
    console.log(msg);
});

myEmmitter.emit('anEvent','The event is absolutely emmitted');