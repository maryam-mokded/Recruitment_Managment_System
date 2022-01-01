const express = require('express');
const router = express.Router();
 
const condidatController = require('../controllers/condidat');
// const auth = require('./../middlewares/auth')

router.get('/condidat', condidatController.all);
router.get('/condidat/:id',condidatController.get);
router.post('/condidat', condidatController.create);
router.put('/condidat/:id',condidatController.update);
router.delete('/condidat/:id', condidatController.delete);

module.exports = router;