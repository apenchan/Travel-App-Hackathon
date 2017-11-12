var mongoose = require('mongoose')

var eventsSchema = new mongoose.Schema({
    description: String,
    startTime: String,
    endDate: String,
    city: String,
    country: String,
    address: String,
    attendees: Number,
    picture: String,
    startDate: Date,
    title: String
});

// var userSchema = new mongoose.Schema({
//     userName : String,
//     password : String,
//     events : [eventsSchema]
// })


var Events = mongoose.model('events', eventsSchema)
    // var Users = mongoose.model('users', userSchema)

module.exports.Events = Events;
// module.exports.Users = Users;