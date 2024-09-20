const winston = require('winston');
const {esClient} = require('../config/server-config');
const logger = require('../utils/logger');

class LoggingService {
  static async storeLog(service, level, message) {
    if (!service || !level || !message) {
      throw new Error('Missing log details');
    }

    try {
      // Log to Elasticsearch
      await esClient.index({
        index: 'logs',
        body: {
          service,
          level,
          message,
          timestamp: new Date(),
        }
      });
      logger.info(`Log stored: ${message}`); // Log to Winston
    } catch (error) {
      logger.error(`Failed to store log: ${error.message}`);
      throw error; // Rethrow the error for further handling
    }
  }
}

module.exports = LoggingService;
