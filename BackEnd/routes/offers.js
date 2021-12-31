const express = require('express');
const router = express.Router();
 
const offerController = require('../controllers/offer');
const auth = require('./../middlewares/auth')

router.get('/offers', offerController.Findall);
router.get('/offer/:id',offerController.getOffer);
router.post('/offer',auth, offerController.createOffer);
router.put('/offer/:id',auth, offerController.updateOffer);
router.delete('/offer/:id',auth, offerController.deleteOffer);

module.exports = router;