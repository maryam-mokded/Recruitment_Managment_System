const mongoose = require('mongoose');

const interviewSchema = mongoose.Schema({
    interviewDate : {type: Date, required: true},
    interviewType : {type: String, required: true},
    location : {type: String, required: true},
    time: {type: String , required: true},
    note: {type: Number, required: true},
    test : {type: Number, required: true},
});

module.exports = mongoose.model('Interview', interviewSchema);