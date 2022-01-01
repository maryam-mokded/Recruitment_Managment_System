const questionController = require('../controllers/question');
const express = require('express');
const router = express.Router();


const auth = require('./../middlewares/auth')

router.get('/question', questionController.all);

router.get('/question/:id', questionController.get);
router.post('/question', questionController.create);
router.put('/question/:id', questionController.update);
router.delete('/question/:id', questionController.delete);

module.exports = router;