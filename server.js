const express = require('express');
var path = require('path');
const authRouting = require("./server/routing/authRouting.js");
// var FacebookStrategy = require('passport-facebook').Strategy;
var Events = require('./server/models/models.js').Events
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var passport = require('passport');
var expressJWT = require('express-jwt');
var config = require('./config.js');
const app = express();
var db = mongoose.connect('mongodb://localhost/travelDB', function () {
  console.log('Travel App connection established!!!');
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));
app.use(cookieParser());
// app.use(passport.initialize());
// app.use(passport.session());

//USER SERVER//

// app.use(expressSession({
//   secret: 'yourSecretHere',
//   resave: false,
//   saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// Add the auth routing
app.use("/auth", authRouting);

// Create authentication middleware
var ensureAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.status('401').send({message: "Unauthorized" });
  }
};


app.get('/currentuser', ensureAuthenticated, function(req, res) {
  if (req.user) {
    res.send(req.user.username)
  } else {
    res.send(null)  
  }
});

// app.post('/user', function (req, res, next) {
//   Users.create(req.body,function (err, savedUser) {
//     if (err) { res.send(err) }
//     res.send(savedUser);
//     console.log('the user was saved')
//   })
// })

// app.get('/user/:userId', function (req, res, next) {
//   Users.findById(req.params.userId,function (err, thisUser) {
//     if (err) { res.send(err) }
//     res.send(thisUser);
//     console.log('get this specific user')
//   })
// })


//EVENT SERVER//
app.post('/event', function (req, res, next) {
  console.log(req.body)
  var events = new Events(req.body);
  events.save(function (err, savedEvent) {
      if (err) { res.send(err) }
      res.send(savedEvent);
      console.log('the savedEvent was saved')
  })
})

  // Events.create(req.body,function (err, savedEvent) {
  //   if (err) { res.send(err) }
  //   res.send(savedEvent);
  //   console.log('the event was saved')
  // })


app.get('/event', function (req, res, next) {
  Events.find({},function (err, allEvents) {
    if (err) { res.send(err) }
    res.send(allEvents);
    console.log('get all events')
  })
})

app.get('/event/:id', function (req, res, next) {
  Events.findById(req.params.id,function (err, thisEvent) {
    if (err) { res.send(err) }
    res.send(thisEvent);
    console.log('get this specific event')
  })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './server/static/index.html'))
})


// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});