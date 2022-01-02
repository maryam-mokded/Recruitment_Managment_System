const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    id_Question: {type: Number},
    question : {type: String, required: true},
});

module.exports = mongoose.model('Question', questionSchema);