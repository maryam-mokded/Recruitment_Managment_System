const Contact= require('../models/Contact');

exports.all = (req, res) => {
    Contact.find()
      .then(contact => res.status(200).json(contact))
      .catch(err => res.status(400).json({error: err.message}));
  };
  

  exports.get = (req, res, next) => {
    Contact.findOne({ id_Contact: req.params.id })
        .then(interview => res.status(200).json(contact))
        .catch(error => res.status(404).json({ error }));
    };
  

  exports.create = (req, res, next) => {
    const contact = new Contact({
      ...req.body
    });
    contact.save()
      .then(() => res.status(201).json({ message: 'Contact created  !'}))
      .catch(error => res.status(400).json({ error }));
  };
  

  exports.update = (req, res, next) => {
    Contact.updateOne({ id_Contact: req.params.id }, { ...req.body, id_Contact: req.params.id })
      .then(() => res.status(200).json({ message: 'Contact updated !'}))
      .catch(error => res.status(400).json({ error }));
  };
  

  exports.delete = (req, res, next) => {
    Contact.deleteOne({ id_Contact: req.params.id })
      .then(() => res.status(200).json({ message: 'Contact deleted !'}))
      .catch(error => res.status(400).json({ error }));
  };