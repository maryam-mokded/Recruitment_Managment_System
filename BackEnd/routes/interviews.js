const interviewController = require('../controllers/interview');
const express = require('express');
const router = express.Router();

const auth = require('./../middlewares/auth')

router.get('/interview', interviewController.all);
router.get('/interview/:id', interviewController.get);
router.post('/interview', interviewController.create);
router.put('/interview/:id',auth, interviewController.update);
router.delete('/interview/:id',auth, interviewController.delete);

module.exports = router;