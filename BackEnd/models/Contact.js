const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
   
    id_Contact: {type: Number, required: true},
    comment : {type: String, required: true},
    nom: {type: String},
    email: {type: String},
    prenom: {type: String},
});

module.exports = mongoose.model('Contact', contactSchema);