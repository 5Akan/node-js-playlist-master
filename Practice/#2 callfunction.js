function callBack(fun){
    fun();
}

var sayBye = function() {
    console.log("Bye")
}

callBack(sayBye);

