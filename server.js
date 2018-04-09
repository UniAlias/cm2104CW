//server.js
//load the things
var express = require('express');
var app = express();

app.use(express.static('public'))

//set the view engine to express
app.set('view engine', 'ejs');

//use .render to load up an ejs view file

//Homepage
app.get('/', function(req, res) {
  res.render('pages/homepage');
});

//categoriespage
app.get('/categoriespage', function(req, res) {
  res.render('pages/categoriespage');
});

//userpage
app.get('/userPage', function(req, res) {
  res.render('pages/userpage');
});

//list Page
app.get('/listpage', function(req, res) {
  res.render('pages/listpage');
});

//Display list of items
app.get('/listSoftware', function(req, res) {
  db.collection('software').find(req.body).toArray()
}
