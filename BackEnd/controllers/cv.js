const Cv= require('../models/Cv');


exports.all = (req, res) => {
    Cv.find()
      .then(cv => res.status(200).json(cv))
      .catch(err => res.status(400).json({error: err.message}));
  };
  
  // get a interview by id
  exports.get = (req, res, next) => {
    Cv.findOne({ idCV: req.params.id })
        .then(interview => res.status(200).json(cv))
        .catch(error => res.status(404).json({ error }));
    };
  
    // create a new interview
  exports.create = (req, res, next) => {
    const cv = new Cv({
      ...req.body
    });
    cv.save()
      .then(() => res.status(201).json({ message: 'Cv created  !'}))
      .catch(error => res.status(400).json({ error }));
  };
  
  // update an interview by id
  exports.update = (req, res, next) => {
    Cv.updateOne({ idCV: req.params.id }, { ...req.body, idCV: req.params.id })
      .then(() => res.status(200).json({ message: 'Cv updated !'}))
      .catch(error => res.status(400).json({ error }));
  };
  
  // delete an interview by id
  exports.delete = (req, res, next) => {
    Cv.deleteOne({ idCV: req.params.id })
      .then(() => res.status(200).json({ message: 'Cv deleted !'}))
      .catch(error => res.status(400).json({ error }));
  };

  