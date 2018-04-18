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


app.get('/getcategory', function(req, res) {
var cat = unescape(req.query.cat);
console.log(cat);
db.collection('software').find({category: cat}).toArray(function(err, result) {
  if (err) throw err;
  // res.render('pages/list', {
  //   software: result
  // });
  res.send(result);
  // res.redirect('/list');
});
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
  var cat = req.query.cat;
  console.log(cat);
  res.render('pages/list',{category:cat});
});

app.get('/login', function(req, res) {
  res.render('pages/login');
});

app.get('/signup', function(req, res) {
  if(!req.session.loggedin){res.redirect('/login');return;}
  res.render('pages/signup')
});

//Display list of items
// app.get('/listSoftware', function(req, res) {
//   db.collection('software').find(req.body).toArray()
// }app.listen(8080);

app.post('/dologin', function(req, res) {
  console.log(JSON.stringify(req.body))
  var uname = req.body.username;
  var pword = req.body.password;

  db.collection('people').findOne({"login.username":uname}, function(err, result) {
    if (err) throw err;//if there is an error, throw the error
    //if there is no result, redirect the user back to the login system as that username must not exist
    if(!result){res.redirect('/login');return}
    //if there is a result then check the password, if the password is correct set session loggedin to true and send the user to the index
    if(result.login.password == pword){res.redirect('/') }
    //otherwise send them back to login
    else{res.redirect('/login')}
  });
});

app.post('/signup', function(req, res) {
  //check we are logged in
  if(!req.session.loggedin){res.redirect('/login');return;}

  //we create the data string from the form components that have been passed in

var datatostore = {
"gender":req.body.gender,
"name":{"title":req.body.title,"first":req.body.first,"last":req.body.last},
"location":{"street":req.body.street,"city":req.body.city,"state":req.body.state,"postcode":req.body.postcode},
"email":req.body.email,
"login":{"username":req.body.username,"password":req.body.password},
"dob":req.body.dob,"registered":Date(),
"picture":{"large":req.body.large,"medium":req.body.medium,"thumbnail":req.body.thumbnail},
"nat":req.body.nat}


//once created we just run the data string against the database and all our new data will be saved/
  db.collection('people').save(datatostore, function(err, result) {
    if (err) throw err;
    console.log('saved to database')
    //when complete redirect to the index
    res.redirect('/')
  })
});
