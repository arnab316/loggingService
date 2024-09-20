const { sequelize } = require('../models');  // Database connection
const amqp = require('amqplib/callback_api');  // RabbitMQ library

async function checkDatabaseHealth() {
  try {
    await sequelize.authenticate();
    return true;
  } catch (error) {
    return false;
  }
}

async function checkRabbitMQHealth() {
  return new Promise((resolve, reject) => {
    amqp.connect('amqp://localhost', (error, connection) => {
      if (error) {
        resolve(false);
      } else {
        connection.close();
        resolve(true);
      }
    });
  });
}

module.exports = {
  checkDatabaseHealth,
  checkRabbitMQHealth,
};
