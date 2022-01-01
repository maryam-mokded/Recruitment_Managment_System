const Question = require('../models/Question');

exports.all = (req, res) => {
  Question.find()
      .then(question => res.status(200).json(question))
      .catch(err => res.status(400).json({error: err.message}));
  };
  
  // get a question by id
  exports.get = (req, res, next) => {
    Question.findOne({id_Question: req.params.id })
        .then(question => res.status(200).json(question))
        .catch(error => res.status(404).json({ error }));
    };
  
    // create a new question
  exports.create = (req, res, next) => {
    const question = new Question({
      ...req.body
    });
    question.save()
      .then(() => res.status(201).json({ message: 'Question created  !'}))
      .catch(error => res.status(400).json({ error }));
  };
  
  // update a question by id
  exports.update = (req, res, next) => {
    Question.updateOne({id_Question: req.params.id }, { ...req.body,id_Question: req.params.id })
      .then(() => res.status(200).json({ message: 'Question updated !'}))
      .catch(error => res.status(400).json({ error }));
  };
  
  // delete an interview by id
  exports.delete = (req, res, next) => {
    Question.deleteOne({id_Question: req.params.id })
      .then(() => res.status(200).json({ message: 'Question deleted !'}))
      .catch(error => res.status(400).json({ error }));
  };