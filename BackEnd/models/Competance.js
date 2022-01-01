const mongoose = require('mongoose');

const competanceSchema = mongoose.Schema({
   
    idCompetance: {type: Number, required: true},
    nomCompetance : {type: String, required: true},
    pourcentage : {type: Number},
    user : {type: Array},
});

module.exports = mongoose.model('Competance', competanceSchema);