const express = require('express');
const router = express.Router();
const MonitoringController = require('../controllers/monitoringController');
const LoggingController = require('../controllers/LoggingController');

router.get('/health', MonitoringController.healthCheck);
//* monitoring service
router.post('/monitoring', LoggingController.storeLog)
module.exports = router;
