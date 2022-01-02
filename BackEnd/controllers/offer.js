const Offer = require('../models/Offer');

// get all Offers
exports.Findall = (req, res) => {
    Offer.find()
      .then(offer => res.status(200).json(offer))
      .catch(err => res.status(400).json({error: err.message}));
  };
  
  // get offer by id
  exports.getOffer = (req, res, next) => {
    Offer.findOne({ idOffer: req.params.id })
        .then(offer => res.status(200).json(offer))
        .catch(error => res.status(404).json({ error }));
    };
  
  // create a new offer
  exports.createOffer = (req, res, next) => {
    const offer = new Offer({
      ...req.body
    });
    offer.save()
      .then(() => res.status(201).json({ message: 'Offer created  !'}))
      .catch(error => res.status(400).json({ error }));
  };
  
  // update an offer by id
  exports.updateOffer = (req, res, next) => {
    Offer.updateOne({ idOffer: req.params.id }, { ...req.body, idOffer: req.params.id })
      .then(() => res.status(200).json({ message: 'Offer updated !'}))
      .catch(error => res.status(400).json({ error }));
  };
  
  // delete an offer by id
  exports.deleteOffer = (req, res, next) => {
    Offer.deleteOne({ idOffer: req.params.id })
      .then(() => res.status(200).json({ message: 'offer deleted !'}))
      .catch(error => res.status(400).json({ error }));
  };