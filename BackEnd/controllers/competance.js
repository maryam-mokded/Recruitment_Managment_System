const Competance = require('../models/Competance');

// get all Offers
exports.Findall = (req, res) => {
    Competance.find()
      .then(competance => res.status(200).json(competance))
      .catch(err => res.status(400).json({error: err.message}));
  };
  
  // get offer by id
  exports.get = (req, res, next) => {
    Competance.findOne({ idCompetance: req.params.id })
        .then(competance => res.status(200).json(competance))
        .catch(error => res.status(404).json({ error }));
    };
  
  // create a new offer
  exports.create = (req, res, next) => {
    const competance = new Competance({
      ...req.body
    });
    competance.save()
      .then(() => res.status(201).json({ message: 'Competance created  !'}))
      .catch(error => res.status(400).json({ error }));
  };
  
  // update an offer by id
  exports.update = (req, res, next) => {
    Competance.updateOne({ idCompetance: req.params.id }, { ...req.body, idCompetance: req.params.id })
      .then(() => res.status(200).json({ message: 'Competance updated !'}))
      .catch(error => res.status(400).json({ error }));
  };
  
  // delete an offer by id
  exports.delete= (req, res, next) => {
    Competance.deleteOne({ idCompetance: req.params.id })
      .then(() => res.status(200).json({ message: 'competance deleted !'}))
      .catch(error => res.status(400).json({ error }));
  };