var time = 0;
var timer = setInterval(function (params) {
    time +=2;
    console.log(time + ' seconds have passed');
    if(time>5){
        clearInterval(timer);
    }
},2000);

console.log(__dirname)
console.log(__filename)