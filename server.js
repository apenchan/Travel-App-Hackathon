const express = require('express');
var path = require('path');
// var Events = require('./server/models/models.js').Events
var Events = require('./models/models.js').Events
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var FontAwesome = require('react-fontawesome');
const app = express();
var expressJWT = require('express-jwt');
var ensureAuthenticated = expressJWT({ secret: process.env.JWT_SECRET || "1234" });
var db = mongoose.connect('mongodb://localhost/travelDB', function() {
    console.log('Travel App connection established!!!');
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('node_modules'));
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));
app.use(cookieParser());
// app.use(passport.initialize());
// app.use(passport.session());

var authController = require('./controllers/auth.js');
app.use('/auth', authController);

var usersController = require('./controllers/users.js');
app.use('/users', usersController);

app.get("/currentUser", ensureAuthenticated, function(req, res){
  console.log(req)
  res.send("yoo")
})

//EVENT SERVER//
app.post('/event', function(req, res, next) {
    console.log(req.user)
    console.log(req.body)
    var events = new Events(req.body);
    events.save(function(err, savedEvent) {
        if (err) { res.send(err) }
        res.send(savedEvent);
        console.log('the savedEvent was saved')
    })
})


app.get('/event',function(req, res, next) {
    Events.find({}, function(err, allEvents) {
        if (err) { res.send(err) }
        res.send(allEvents);
        console.log('get all events')
    })

})

app.get('/event/:id', ensureAuthenticated, function(req, res, next) {
  console.log|('did we get ensured')
  console.log('____________________________________________________________________')
    console.log(req.params.id)
    Events.findById(req.params.id, function(err, thisEvent) {
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