const { createLogger, format, transports } = require('winston');
// Configure Winston logger
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.File({ filename: 'logs/app.log' }),
    new transports.Console()
  ]
});

module.exports = logger;
