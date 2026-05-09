const express = require('express');
const router = express.Router();
const pincodeController = require('../controllers/pincodeController');

router.get('/pincode/:pin', pincodeController.getByPincode);
router.get('/area/:name', pincodeController.getByArea);

module.exports = router;
