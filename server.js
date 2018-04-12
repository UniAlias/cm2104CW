//server.js
//load the things

// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb://localhost:27017/software";
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

//set the view engine to express
app.set('view engine', 'ejs');

// var db;
//
// MongoClient.connect(url, function(err, database) {
//   if (err) throw err;
//   db = database;
//   app.listen(8080);
//   console.log('listening');
// });

//use .render to load up an ejs view file

//Homepage
app.get('/', function(req, res) {
  res.render('pages/homepage');
});


app.get('/getcategory', function(req, res) {
var cat = req.query.cat;
db.collection('software').find({category: cat}).toArray(function(err, result) {
  if (err) throw err;
  res.send(result);
}

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
  db.collection('software').find({category: req.body.id})
  res.render('pages/list');
});

//Display list of items
// app.get('/listSoftware', function(req, res) {
//   db.collection('software').find(req.body).toArray()
// }

//-----------------POST methods
app.post('/softwarelist', function(req, res) {
    db.collection('software').find(req.id).toArray(function(err, result) {
      if (err) throw err;

    }
}


app.listen(8080);
