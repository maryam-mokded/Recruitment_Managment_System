const express = require('express');
const router = express.Router();
 
const cvController = require('../controllers/cv');
const auth = require('./../middlewares/auth')

router.get('/cv', cvController.all);
router.get('/cv/:id',cvController.get);
router.post('/cv', cvController.create);
router.put('/cv/:id',cvController.update);
router.delete('/cv/:id', cvController.delete);

module.exports = router;