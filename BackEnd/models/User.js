const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    tel: {type: Number, required: true},
    photo: {type: String, required: true},
    isAdmin: {type: Number, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    enabled: {type: Number, required: true},
    pdfcv: {type:Array, required: true},
    dateEmbauche:{type: Date, required: true},
    pwd: {type: String, required: true},
    adress: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    prenom: {type: String, required: true},
    cin: {type: Number, required: true},
    competance: {type: String, required: true},
    nom: {type: String, required: true},
    lienFacebook:{type: String, required: true},
    lienLinkedIn:{type: String, required: true},
    lienGithub:{type: String, required: true},
    lienInstagram:{type: String, required: true},
    authorities: {type: Array, required: true},
    accountNonExpired:{type: Boolean, required: true},
    accountNonLocked:{type: Boolean, required: true},
    credentialsNonExpired:{type: Boolean, required: true},
    
   
   
});

module.exports = mongoose.model('User', userSchema);