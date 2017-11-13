var mongoose = require('mongoose')

var eventsSchema = new mongoose.Schema({ 
        description: String, 
        startTime: String,
        endTime: String,
        city: String,
        country: String,
        address : String,
        attendees: Number,
        picture: String,
        date : Date,
        title: String,
        isShown: Boolean
    }); 
     
    // var userSchema = new mongoose.Schema({
    //     userName : String,
    //     password : String,
    //     events : [eventsSchema]
    // })
    


// var userSchema = new mongoose.Schema({
//     userName : String,
//     password : String,
//     events : [eventsSchema]
// })


var Events = mongoose.model('events', eventsSchema)
    // var Users = mongoose.model('users', userSchema)

module.exports.Events = Events;
// module.exports.Users = Users;