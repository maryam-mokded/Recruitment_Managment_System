const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');
const auth = require('./../middlewares/auth')

// router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/profil/:id', auth, userController.profile);

router.get('/user',auth, userController.all);
router.get('/user/:id',auth, userController.get);
router.post('/user',auth, userController.create);
router.put('/user/:id',auth, userController.update);
router.delete('/user/:id',auth, userController.delete);

module.exports = router;