const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// exports.signup = (req, res, next) => {
//   bcrypt.hash(req.body.password, 10)
//   .then(hash => {
//     const user = new User({
//       name: req.body.name,
//       email: req.body.email,
//       password: hash
//     });
//             user.save()
//                 .then(() => res.status(201).json({
//                   message: 'User created !',
//                   status: 201
//                 }))
//                 .catch(error => res.status(400).json({ error }));
//         })
//         .catch(error => res.status(500).json({ error }));
// };

exports.login = (req, res, next) => {
  User.findOne({ username: req.body.username })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'User not found !' });
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Wrong password !' });
            }
            res.status(200).json({
              idUser: user.idUser,
              token: jwt.sign(
                { idUser: user.idUser },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' }
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
};

exports.profile = (req, res, next) => {
  User.findOne({ idUser: req.params.id })
    .then(user => res.status(200).json(user))
    .catch(error => res.status(500).json({ error }));
};

exports.all = (req, res) => {
  User.find()
    .then(user => res.status(200).json(user))
    .catch(err => res.status(400).json({error: err.message}));
};


exports.get = (req, res, next) => {
  User.findOne({ idUser: req.params.id })
      .then(user => res.status(200).json(user))
      .catch(error => res.status(404).json({ error }));
  };


exports.create = (req, res, next) => {
  const user = new User({
    ...req.body
  });
  user.save()
    .then(() => res.status(201).json({ message: 'User created  !'}))
    .catch(error => res.status(400).json({ error }));
};

// update an interview by id
exports.update = (req, res, next) => {
  User.updateOne({ idUser: req.params.id }, { ...req.body, idUser: req.params.id })
    .then(() => res.status(200).json({ message: 'User updated !'}))
    .catch(error => res.status(400).json({ error }));
};

// delete an interview by id
exports.delete = (req, res, next) => {
  User.deleteOne({ idUser: req.params.id })
    .then(() => res.status(200).json({ message: 'User deleted !'}))
    .catch(error => res.status(400).json({ error }));
};