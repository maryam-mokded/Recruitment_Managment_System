const interviewController = require('../controllers/interview');
const express = require('express');
const router = express.Router();

router.get('/interview', interviewController.all);
router.get('/interview/:id', interviewController.get);
router.post('/interview', interviewController.create);
router.put('/interview/:id', interviewController.update);
router.delete('/interview/:id', interviewController.delete);

module.exports = router;