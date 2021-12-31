const mongoose = require('mongoose');

const offerSchema = mongoose.Schema({
    date : {type: Date, required: true},
    description : {type: String, required: true},
    titre : {type: String, required: true},
    nbPost: {type: Number, required: true},
});

module.exports = mongoose.model('Offer', offerSchema);