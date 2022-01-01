const mongoose = require('mongoose');

const condidatSchema = mongoose.Schema({
    tel: {type: Number, required: true},
    photo: {type: String, required: true},
    isAdmin: {type: Number, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    enabled: {type: Number, required: false},
    pdfcv: {type:Array, required: true},
    dateEmbauche:{type: Date, required: true},
    pwd: {type: String, required:false},
    adress: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    prenom: {type: String, required: true},
    cin: {type: Number, required: true},
    competance: {type: String, required: false},
    nom: {type: String, required: true},
    lienFacebook:{type: String, required: false},
    lienLinkedIn:{type: String, required: false},
    lienGithub:{type: String, required: false},
    lienInstagram:{type: String, required: false},
    authorities: {type: Array, required: true},
    accountNonExpired:{type: Boolean, required: true},
    accountNonLocked:{type: Boolean, required: true},
    credentialsNonExpired:{type: Boolean, required: true},
    
   
   
});

module.exports = mongoose.model('Condidat', condidatSchema);