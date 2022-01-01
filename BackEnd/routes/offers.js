const express = require('express');
const router = express.Router();
 
const offerController = require('../controllers/offer');
const auth = require('./../middlewares/auth')

router.get('/offers', offerController.Findall);
router.get('/offer/:id',offerController.getOffer);
router.post('/offer', offerController.createOffer);
router.put('/offer/:id',offerController.updateOffer);
router.delete('/offer/:id', offerController.deleteOffer);

module.exports = router;