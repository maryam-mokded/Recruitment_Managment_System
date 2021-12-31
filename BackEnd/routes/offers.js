const offerController = require('../controllers/offer');
const express = require('express');
const router = express.Router();

router.get('/offers', offerController.Findall);
router.get('/offer/:id', offerController.getOffer);
router.post('/offer', offerController.createOffer);
router.put('/offer/:id', offerController.updateOffer);
router.delete('/offer/:id', offerController.deleteOffer);

module.exports = router;