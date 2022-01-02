const express = require('express');
const router = express.Router();
 
const competanceController = require('../controllers/competance');
const auth = require('./../middlewares/auth')

router.get('/competance', competanceController.Findall);
router.get('/competance/:id',competanceController.get);
router.post('/competance', competanceController.create);
router.put('/competance/:id',competanceController.update);
router.delete('/competance/:id', competanceController.delete);

module.exports = router;