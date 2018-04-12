//server.js
//load the things

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/software";
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

//set the view engine to express
app.set('view engine', 'ejs');

var db;

MongoClient.connect(url, function(err, database) {
  if (err) throw err;
  db = database;
  app.listen(8080);
  console.log('listening');
});

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
app.get('/list', function(req, res) {
  res.render('pages/list');
});

//Display list of items
// app.get('/listSoftware', function(req, res) {
//   db.collection('software').find(req.body).toArray()
// }
app.listen(8080);
