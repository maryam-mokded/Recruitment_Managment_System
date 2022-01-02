const mongoose = require('mongoose');

const cvSchema = mongoose.Schema({
   
    idCv: {type: Number, required: true},
    pdf : {type: String, required: true},
});

module.exports = mongoose.model('Cv', cvSchema);