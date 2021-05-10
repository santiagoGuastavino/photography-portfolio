const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.showHome);
router.get('/about', mainController.showAbout);

module.exports = router;