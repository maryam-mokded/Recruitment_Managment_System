const mongoose = require('mongoose');

const QuestionnaireSchema = mongoose.Schema({
    id_Questionnaire : {type: Number, required: true},
    interview : {type: Array, required: true},
    question : {type: Array, required: true},
    validate: {type: Number , required: true},
});

module.exports = mongoose.model('Questionnaire', QuestionnaireSchema);