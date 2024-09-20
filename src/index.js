const express = require('express');
const apiRoutes = require('./routes/monitoringRoute');
const app = express();
const PORT = process.env.PORT || 3000;
const logger = require('./utils/logger');



// Middleware to log requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/logs', apiRoutes);
app.use((req, res, next) => {
  logger.info({
    message: 'HTTP Request',
    method: req.method,
    url: req.url,
    time: new Date().toISOString()
  });
  next();
});
 
app.get('/', (req, res) => {
  res.send('Hello, ELK!');
});

app.listen(PORT, () => {
  logger.info(`Logging and Monitoring Service running on port ${PORT}`);
  
});
