const Interview = require('../models/Interview');

exports.all = (req, res) => {
    Interview.find()
      .then(interview => res.status(200).json(interview))
      .catch(err => res.status(400).json({error: err.message}));
  };
  
  // get a interview by id
  exports.get = (req, res, next) => {
    Interview.findOne({ id_Interview: req.params.id })
        .then(interview => res.status(200).json(interview))
        .catch(error => res.status(404).json({ error }));
    };
  
    // create a new interview
  exports.create = (req, res, next) => {
    const interview = new Interview({
      ...req.body
    });
    interview.save()
      .then(() => res.status(201).json({ message: 'Interview created  !'}))
      .catch(error => res.status(400).json({ error }));
  };
  
  // update an interview by id
  exports.update = (req, res, next) => {
    Interview.updateOne({ id_Interview: req.params.id }, { ...req.body, id_Interview: req.params.id })
      .then(() => res.status(200).json({ message: 'Interview updated !'}))
      .catch(error => res.status(400).json({ error }));
  };
  
  // delete an interview by id
  exports.delete = (req, res, next) => {
    Interview.deleteOne({ id_Interview: req.params.id })
      .then(() => res.status(200).json({ message: 'interview deleted !'}))
      .catch(error => res.status(400).json({ error }));
  };