const express = require('express');
const router = express.Router();
 
const questionnaireController = require('../controllers/questionnaire');
const auth = require('./../middlewares/auth')

router.get('/questionnaire', questionnaireController.all);
router.get('/questionnaire/:id',questionnaireController.get);
router.post('/questionnaire', questionnaireController.create);
router.put('/questionnaire/:id',questionnaireController.update);
router.delete('/questionnaire/:id', questionnaireController.delete);

module.exports = router;