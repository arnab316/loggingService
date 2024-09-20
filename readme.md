# Movie Streaming Logging Service

## Overview

The **Movie Streaming Logging Service** is a Node.js application designed to log and monitor service health for a movie streaming application. This service integrates with Elasticsearch for logging and RabbitMQ for messaging, providing insights into system performance and operational status.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Health Check](#health-check)
- [Directory Structure](#directory-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Log entries stored in Elasticsearch
- Health checks for the database and RabbitMQ
- API endpoints for monitoring and logging

## Technologies

- Node.js
- Express
- Sequelize (MySQL)
- Elasticsearch
- RabbitMQ

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd movieStreamingService


2. **Install dependencies:**
```bash
npm install

```

3. **Set up the database**: Make sure you have MySQL running and create a database named MovieStreamingApp.

4. **Start Elasticsearch**: Ensure Elasticsearch is running on http://localhost:9200.

5. **Start RabbitMQ**: Ensure RabbitMQ is running and accessible.

## Api Endpoints

1. **Health Check**
- GET `/health`
 - `Description`: Checks the health of the application, including database and RabbitMQ status.
 - **Response**:
 ```json
{
    "success": true,
    "message": "System is healthy",
    "data": {
        "uptime": 42.751743667,
        "memoryUsage": {
            "rss": 79859712,
            "heapTotal": 23707648,
            "heapUsed": 22326568,
            "external": 2844231,
            "arrayBuffers": 133248
        },
        "cpuLoad": [
            5.67,
            3.18,
            1.73
        ],
        "db": "healthy",
        "rabbitMQ": "healthy"
    }
}

 ```
 - `200 OK`: Returns the health status.
 - `500 Internal Server Error`: If health check fails.



2. Store Log
- POST `/monitoring`
- **Description**: Stores a log entry in Elasticsearch.
- Request Body:
```json
{
  "service": "string",
  "level": "string",
  "message": "string"
}
```
- Response:
- **200 OK**: Log stored successfully.
- **400 Bad Request**: Missing log details.
- **500 Internal Server Error**: Failed to store log.



## Health Check
- The health check endpoint provides the following information:

- Application uptime
- Memory usage
- CPU load
- Database connection status
- RabbitMQ connection status

## Directory Structure
└── src
    ├── config            # Configuration files
    ├── controllers       # Request handlers
    ├── index.js         # Entry point of the application
    ├── models            # Database models and connections
    ├── routes            # API route definitions
    ├── services          # Business logic
    └── utils             # Utility functions, including health checks
Key Files
- `models/index.js`: Sets up the database connection using Sequelize.
- `utils/healthCheck.js`: Contains health check functions for database and RabbitMQ.
- `controllers/loggingController.js`: Handles log storage in Elasticsearch.
- `controllers/monitoringController.js`: Handles health check requests.
- `routes/index.js`: Defines API routes.

- for logging and logs
` bin/logstash -f /home/arnab/movieProject/loggingService/logstash.conf `
`GET /movie-streaming-logs-*/_search?pretty`