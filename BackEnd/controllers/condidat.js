const Condidat = require('../models/Condidat');


exports.profile = (req, res, next) => {
    Condidat.findOne({ idUser: req.params.id })
    .then(condidat => res.status(200).json(condidat))
    .catch(error => res.status(500).json({ error }));
};

exports.all = (req, res) => {
    Condidat.find()
    .then(condidat => res.status(200).json(condidat))
    .catch(err => res.status(400).json({error: err.message}));
};


exports.get = (req, res, next) => {
    Condidat.findOne({ idUser: req.params.id })
      .then(condidat => res.status(200).json(condidat))
      .catch(error => res.status(404).json({ error }));
  };


exports.create = (req, res, next) => {
  const condidat = new Condidat({
    ...req.body
  });
  condidat.save()
    .then(() => res.status(201).json({ message: 'Condidat created  !'}))
    .catch(error => res.status(400).json({ error }));
};

// update an interview by id
exports.update = (req, res, next) => {
    Condidat.updateOne({ idUser: req.params.id }, { ...req.body, idUser: req.params.id })
    .then(() => res.status(200).json({ message: 'Condidat updated !'}))
    .catch(error => res.status(400).json({ error }));
};

// delete an interview by id
exports.delete = (req, res, next) => {
    Condidat.deleteOne({ idUser: req.params.id })
    .then(() => res.status(200).json({ message: 'Condidat deleted !'}))
    .catch(error => res.status(400).json({ error }));
};