const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    tel: {type: Number},
    photo: {type: String},
    isAdmin: {type: Number},
    username: {type: String},
    password: {type: String},
    enabled: {type: Number},
    pdfcv: {type:Array},
    dateEmbauche:{type: Date},
    pwd: {type: String},
    adress: {type: String },
    email: {type: String },
    prenom: {type: String },
    cin: {type: Number },
    competance: {type: String},
    nom: {type: String },
    lienFacebook:{type: String},
    lienLinkedIn:{type: String},
    lienGithub:{type: String},
    lienInstagram:{type: String},
    authorities: {type: Array },
    accountNonExpired:{type: Boolean },
    accountNonLocked:{type: Boolean },
    credentialsNonExpired:{type: Boolean },
    
   
   
});

module.exports = mongoose.model('User', userSchema);