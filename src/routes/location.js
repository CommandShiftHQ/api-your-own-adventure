const express = require('express');
const { describeLocation, resolveChoice } = require('../controllers/location');

const router = express.Router();

router.route('/:locationName').get(describeLocation).post(resolveChoice);

module.exports = router;
