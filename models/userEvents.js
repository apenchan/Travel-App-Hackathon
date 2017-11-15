var mongoose = require('mongoose')

var userEventSchema = new mongoose.Schema({
    description: String,
    // startTime: String,
    startDate: Date,
    endDate: String,
    // city: String,
    // country: String,
    address: String,
    lat: Number,
    lng: Number,
    attendees: Number,
    picture: String,
    title: String,
    isShown: Boolean
});


var userEvent = mongoose.model('userEvent', userEventSchema)

module.exports = userEvent;