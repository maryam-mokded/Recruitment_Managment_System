const express = require('express');
const router = express.Router();
 
const contactController = require('../controllers/contact');
const auth = require('./../middlewares/auth')

router.get('/contact', contactController.all);
router.get('/contact/:id',contactController.get);
router.post('/contact', contactController.create);
router.put('/contact/:id',contactController.update);
router.delete('/contact/:id', contactController.delete);

module.exports = router;