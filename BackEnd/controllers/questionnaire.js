const Questionnaire= require('../models/Questionnaire');

exports.all = (req, res) => {
    Questionnaire.find()
      .then(questionnaire => res.status(200).json(questionnaire))
      .catch(err => res.status(400).json({error: err.message}));
  };
  

  exports.get = (req, res, next) => {
    Questionnaire.findOne({ id_Questionnaire: req.params.id })
        .then(questionnaire => res.status(200).json(questionnaire))
        .catch(error => res.status(404).json({ error }));
    };
  

  exports.create = (req, res, next) => {
    const questionnaire = new Questionnaire({
      ...req.body
    });
    questionnaire.save()
      .then(() => res.status(201).json({ message: 'Questionnaire created  !'}))
      .catch(error => res.status(400).json({ error }));
  };
  

  exports.update = (req, res, next) => {
    Questionnaire.updateOne({ id_Questionnaire: req.params.id }, { ...req.body, id_Questionnaire: req.params.id })
      .then(() => res.status(200).json({ message: 'Questionnaire updated !'}))
      .catch(error => res.status(400).json({ error }));
  };
  

  exports.delete = (req, res, next) => {
    Questionnaire.deleteOne({ id_Questionnaire: req.params.id })
      .then(() => res.status(200).json({ message: 'Questionnaire deleted !'}))
      .catch(error => res.status(400).json({ error }));
  };