const os = require('os');
const { checkDatabaseHealth, checkRabbitMQHealth } = require('../utils/healthCheck');

class MonitoringService {
  static async getHealthStatus() {
    const dbHealth = await checkDatabaseHealth();  // Check DB connection
    const rabbitMQHealth = await checkRabbitMQHealth();  // Check RabbitMQ connection

    return {
      uptime: process.uptime(),
      memoryUsage: process.memoryUsage(),
      cpuLoad: os.loadavg(),
      db: dbHealth ? 'healthy' : 'unhealthy',
      rabbitMQ: rabbitMQHealth ? 'healthy' : 'unhealthy',
    };
  }
}

module.exports = MonitoringService;
