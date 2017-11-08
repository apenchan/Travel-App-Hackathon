const express = require('express');
var path = require('path');
var Events = require('./client/src/models.js').Events
// var Users = require('./client/src/models.js').Users
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
const app = express();

var db = process.env.MONGODB_URI || "mongodb://localhost/travelDB";
mongoose.connect(db);
// var db = mongoose.connect('mongodb://localhost/travelDB', function () {
//   console.log('Travel App connection established!!!');
// })

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

//USER SERVER//
app.post('/user', function (req, res, next) {
  Users.create(req.body,function (err, savedUser) {
    if (err) { res.send(err) }
    res.send(savedUser);
    console.log('the user was saved')
  })
})

app.get('/user/:userId', function (req, res, next) {
  Users.findById(req.params.userId,function (err, thisUser) {
    if (err) { res.send(err) }
    res.send(thisUser);
    console.log('get this specific user')
  })
})


<<<<<<< HEAD
app.post('/event', function(req, res){
  var events = new Events(req.body);
  events.save(function(err, events){
    if(err){
      console.log(err);
    } else {
      console.log(events)
      res.send(events)
    }
  })
})

// app.post('/event', function (req, res, next) {
//   Events.create(req.body,function (err, savedEvent) {
//     if (err) { res.send(err) }
//     res.send(savedEvent);
//     console.log(savedEvent)
//     console.log('the event was saved')
//   })
// })
=======
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

>>>>>>> 14b4eca3eb55f51cf4554596e29713a8c3ffc8c5

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