// Adding the required Modules

var events = require('events');
var util = require('util');
// creating a function Person

var Person = function(name){
// this allows, the function with any object created(james,saif,sampath) to utilise this function
    this.name = name;
}

// From the module util, we are inheriting the from events.EventEmitter
util.inherits(Person,events.EventEmitter);
//randomly 3 objects storing in 3 variables
var james = new Person('james');
var saif = new Person('saif');
var sampath = new Person('sampath');
var Akanimoh = new Person('Akanimoh');

var People = [james,saif,sampath];
console.log(james)
Akanimoh.on('talk', (mssg)=>{
    console.log(Akanimoh.name+" said" + mssg);
})
People.forEach(function(Person){
    Person.on('speak',function(msg){
        console.log(Person.name + ' said: ' + msg );
    });
});

james.emit('speak','This is james');
saif.emit('speak','OH great nice to meet you Mer. ');
sampath.emit('speak','Thats cool');
Akanimoh.emit('talk', ' I did this');