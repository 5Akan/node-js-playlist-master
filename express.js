// // Video 23
// Express JS - helps us with routing , integrate template 
//             engines and contains a middleware frame work 

//the express app gets all of the functionality embedded in the express module

// var express = require('express');

// var app = express();

// // // get method used to make requests in express
// // // app.get(route, function)
// app.get('/', function (req, res) {
//     res.send('this is the home page');
// })

// app.get('/contact', function (req, res) {
//     res.send('this is the contact page');
// })
// app.listen(3000);

// // Video 24
// // Route Parameters
// var express = require('express');

// var app = express();

// app.get('/profile/:id', function (req, res) {
//     res.send('You requested to see profile with an id of ' + req.params.id);
// })


// app.listen(3000);


// // Video 25
// // Templating Engines- used to embedded JScodes into html files
// //useful for dynamic pages where different information will be requested

var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/use.html');
})
app.get('/profile/:id', function (req, res) {
    res.render('profile', {person:req.params.id});
})

//just commit
app.listen(3000);