var mongoose = require('mongoose')

var eventsSchema = new mongoose.Schema(
    { 
        description: String, 
        startTime: Date,
        endTime: Date,
        city: String,
        country: String,
        attendees: Number,
        picture: String,
        date: Date,
        title: String
    });

    var Events = mongoose.model('events', eventsSchema)

    module.exports.Events = Events;
