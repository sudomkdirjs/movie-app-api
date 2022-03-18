const express = require('express');
const router = express.Router();

const HealthController = require('../controllers/health.controller');

router.get('/', HealthController.get);

module.exports = router;
