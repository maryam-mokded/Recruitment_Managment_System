const mongoose = require('mongoose');

const offerSchema = mongoose.Schema({
    date : {type: Date},
    description : {type: String},
    titre : {type: String},
    nbPost: {type: Number},
});

module.exports = mongoose.model('Offer', offerSchema);