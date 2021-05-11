let express = require('express');
let router = express.Router();
let mainController = require('../controllers/mainController');

router.get('/', mainController.showHome);
router.get('/about', mainController.showAbout);

module.exports = router;