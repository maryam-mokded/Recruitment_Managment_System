const mongoose = require('mongoose');

const interviewSchema = mongoose.Schema({
    interviewDate : {type: Date},
    interviewType : {type: String},
    location : {type: String},
    time: {type: String },
    note: {type: Number},
    test : {type: Number},
});

module.exports = mongoose.model('Interview', interviewSchema);