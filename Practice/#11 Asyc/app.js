var fs = require('fs');

fs.readFile('input.txt', 'utf-8', function(err, data) {
   
    fs.writeFile('output.txt',data, function (err,data) {
        
    })
})

console.log("Run at the same time");