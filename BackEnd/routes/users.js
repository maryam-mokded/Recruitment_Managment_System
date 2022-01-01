const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');
const auth = require('./../middlewares/auth')

// router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/profil/:id', auth, userController.profile);

router.get('/user', userController.all);
router.get('/user/:id', userController.get);
router.post('/user', userController.create);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.delete);
// router.delete('/user/:id',auth, userController.delete);
module.exports = router;