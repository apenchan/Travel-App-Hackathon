// import mongoose, { Schema } from 'mongoose';
var mongoose = require('mongoose');

var eventsSchema = new mongoose.Schema({ 
        description: String, 
        startTime: String,
        endTime: String,
        city: String,
        country: String,
        attendees: Number,
        picture: String,
        date: String,
        title: String
    }); 
     
    // var userSchema = new mongoose.Schema({
    //     userName : String,
    //     password : String,
    //     events : [eventsSchema]
    // })
    

    var Events = mongoose.model('Events', eventsSchema)
    // var Users = mongoose.model('users', userSchema)
     
    module.exports = Events;
    // module.exports.Users = Users;
