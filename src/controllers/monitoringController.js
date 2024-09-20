
const {MonitoringService} = require('../services');
const logger = require('../utils/logger');
class MonitoringController {
  static async healthCheck(req, res) {
    try {
      const healthStatus = await MonitoringService.getHealthStatus();
        //* Log the health check request
      logger.info({
        message: 'Health check request',
        method: req.method,
        url: req.url,
        status: 'success',
        time: new Date().toISOString(),
      });
      res.status(200).json({
        success: true,
        message: 'System is healthy',
        data: healthStatus,
      });
    } catch (error) {
      //* Log the error message
      logger.error({
        message: 'Health check failed',
        error: error.message,
        method: req.method,
        url: req.url,
        time: new Date().toISOString(),
      });
      res.status(500).json({
        success: false,
        message: 'Health check failed',
        error: error.message,
      });
    }
  }
}

module.exports = MonitoringController;
