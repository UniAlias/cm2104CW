 //server.js
//load the things

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/software";
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser')
const app = express();

app.use(session({ secret: 'example' }));

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

// This is the route that does the database call depending on what category you clicked on
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
// This route loads the categories page but checks that the user is logged in first
app.get('/categoriespage', function(req, res) {
  if(!req.session.loggedin){res.redirect('/login');return;}
  res.render('pages/categoriespage');
});

//userpage
//This would have loaded the userpage although the userpage is no longer in use
app.get('/userPage', function(req, res) {
  res.render('pages/userpage');
});

//This route is the route that loads the list page, it also passes through the
// category title to the page so that the title of the category can be loaded
app.get('/list', function(req, res) {
  var cat = req.query.cat;
  console.log(cat);
  res.render('pages/list',{category:cat});
});

//This is the login route for a user to log in
app.get('/login', function(req, res) {
  if(req.session.loggedin){res.redirect('/'); return;}
  res.render('pages/login');
});

//This is the sign up route to access the sign up part of the website
app.get('/signup', function(req, res) {
  if(req.session.loggedin){res.redirect('/');return;}
  res.render('pages/signup')
});

//This is the logout route, it sets the loggedin variable to false and also destroys the session
// meaning that nobody else can access that profile or the previously logged in user's information
app.get('/logout', function(req, res) {
  req.session.loggedin = false;
  req.session.destroy();
  res.redirect('/');
});

//This is the profile page route. It calls the database to get all of the details of the user that is currently logged in
app.get('/profile', function(req, res) {
  if(!req.session.loggedin){res.redirect('/login');return;}
  //get the requested user based on their username, eg /profile?username=dioreticllama
  var uname = req.session.currentusername;
  //this query finds the first document in the array with that username.
  //Because the username value sits in the login section of the user data we use login.username
  db.collection('people').findOne({
    "login.username": uname
  }, function(err, result) {
    if (err) throw err;
    //console.log(uname+ ":" + result);
    //finally we just send the result to the user page as "user"
    res.render('pages/profile', {
      user: result
    })
  });
});

//Display list of items
// app.get('/listSoftware', function(req, res) {
//   db.collection('software').find(req.body).toArray()
// }app.listen(8080);

//This is the route that is used once the user has logged in. It logs them in by setting the loggedin session variable to true
//It also sets the current username for the currently logged in user so that it can be passed through
app.post('/dologin', function(req, res) {
  console.log(JSON.stringify(req.body))
  var uname = req.body.username;
  var pword = req.body.password;

  db.collection('people').findOne({"login.username":uname}, function(err, result) {
    if (err) throw err;//if there is an error, throw the error
    //if there is no result, redirect the user back to the login system as that username must not exist
    if(!result){res.redirect('/login');return}
    //if there is a result then check the password, if the password is correct set session loggedin to true and send the user to the index
    if(result.login.password == pword){ req.session.loggedin = true;  req.session.currentusername = result.login.username;req.session.currentuser = result.name.first; res.redirect('/') }
    //otherwise send them back to login
    else{res.redirect('/login')}
  });
});

//This is the signup route that actually adds the new users information to the database.
app.post('/signup', function(req, res) {
  //check we are logged in
  //if(!req.session.loggedin){res.redirect('/login');return;}

var datatostore = {
"_id":req.body.id,
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
