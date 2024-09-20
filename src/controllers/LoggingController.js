const {LoggingService} = require('../services');

class LoggingController {
  static async storeLog(req, res) {
    const { service, level, message } = req.body;

    try {
      await LoggingService.storeLog(service, level, message);
      res.status(200).json({
        success: true,
        message: 'Log stored successfully',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to store log',
        error: error.message,
      });
    }
  }
}

module.exports = LoggingController;
