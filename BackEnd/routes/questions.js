const questionController = require('../controllers/question');
const express = require('express');
const router = express.Router();


const auth = require('./../middlewares/auth')

router.get('/question',auth, questionController.all);
router.get('/question/:id',auth, questionController.get);
router.post('/question',auth, questionController.create);
router.put('/question/:id',auth, questionController.update);
router.delete('/question/:id',auth, questionController.delete);

module.exports = router;