const express = require('express');
var path = require('path');
var events = require('./client/src/models.js').Events
var users = require('./client/src/models.js').Users
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
const app = express();
var db = mongoose.connect('mongodb://localhost/travelDB');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

// app.get('./test',(req,res) => {
//   console.log('works')
//   res.send('works')
// })

// app.post('./search',(req,res) => {

// })


app.post('/event', function (req, res, next) {
  Events.create(req.body, function (err, savedEvent) {
    if (err) { res.send(err) }
    res.send(savedEvent);
    console.log('the event was saved')
  })
})




app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './server/static/index.html'))
})


// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});