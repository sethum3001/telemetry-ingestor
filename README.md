# Telemetry Ingestor<p align="center">

<a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>

A robust IoT telemetry data ingestion system built with NestJS, MongoDB, and Redis. This application receives sensor data from IoT devices, processes it for anomaly detection, and provides real-time alerts and analytics.</p>

## Features[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456

[circleci-url]: https://circleci.com/gh/nestjs/nest

- **Real-time Data Ingestion**: RESTful API endpoints for receiving telemetry data from IoT devices

- **Anomaly Detection**: Automatic alert system for temperature (>50°C) and humidity (>90%) thresholds <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

- **Data Persistence**: MongoDB storage with Mongoose ODM for reliable data persistence <p align="center">

- **Caching Layer**: Redis integration for fast access to latest device readings<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>

- **Analytics**: Site-level aggregation and summary statistics<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>

- **Alert Notifications**: Webhook-based alert delivery system<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>

<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>

## API Endpoints<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>

<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>

- `POST /api/v1/telemetry` - Ingest telemetry data (single or batch)<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>

- `GET /api/v1/devices/{deviceId}/latest` - Get latest reading for a device <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>

- `GET /api/v1/sites/{siteId}/summary` - Get aggregated site statistics <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>

  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>

## Setup Instructions</p>

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)

### Prerequisites  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

- Node.js (v16 or higher)## Description

- MongoDB (local or MongoDB Atlas)

- Redis server[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

- npm or yarn package manager

## Project setup

### Installation

```````bash

1. **Clone the repository and install dependencies:**$ npm install

   ```bash```

   git clone <repository-url>

   cd telemetry-ingestor## Compile and run the project

   npm install

   ``````bash

# development

2. **Environment Configuration:**$ npm run start

   Create a `.env` file in the root directory with the following variables:

   ```env# watch mode

   PORT=3000$ npm run start:dev

   MONGODB_URI=mongodb://localhost:27017/telemetry

   REDIS_URL=redis://localhost:6379# production mode

   ALERT_WEBHOOK_URL=https://webhook.site/your-unique-url$ npm run start:prod

```````

3. **Database Setup:**## Run tests
   - **Local MongoDB**: Ensure MongoDB is running on your system

   - **MongoDB Atlas**: Replace `MONGODB_URI` with your Atlas connection string:```bash

     ```# unit tests

     MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/telemetry?retryWrites=true&w=majority$ npm run test

     ```

# e2e tests

4. **Redis Setup:**$ npm run test:e2e
   - **Local Redis**: Ensure Redis server is running

   - **Cloud Redis**: Update `REDIS_URL` with your cloud Redis connection string# test coverage

$ npm run test:cov

5. **Start the application:**```

   ```````bash

   # Development mode## Deployment

   npm run start:dev

   When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

   # Production mode

   npm run buildIf you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

   npm run start:prod

   ``````bash
   ```````

$ npm install -g @nestjs/mau

### Testing the API$ mau deploy

````

**Sample telemetry data payload:**

```jsonWith Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

{

  "deviceId": "sensor-001",## Resources

  "siteId": "site-alpha",

  "ts": "2025-09-25T10:30:00Z",Check out a few resources that may come in handy when working with NestJS:

  "metrics": {

    "temperature": 45.2,- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.

    "humidity": 65.8- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).

  }- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).

}- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.

```- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).

- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).

**Example requests:**- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).

```bash- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

# Ingest single reading

curl -X POST http://localhost:3000/api/v1/telemetry \## Support

  -H "Content-Type: application/json" \

  -d '{"deviceId":"sensor-001","siteId":"site-alpha","ts":"2025-09-25T10:30:00Z","metrics":{"temperature":45.2,"humidity":65.8}}'Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).



# Get latest device reading## Stay in touch

curl http://localhost:3000/api/v1/devices/sensor-001/latest

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)

# Get site summary- Website - [https://nestjs.com](https://nestjs.com/)

curl "http://localhost:3000/api/v1/sites/site-alpha/summary?from=2025-09-24&to=2025-09-25"- Twitter - [@nestframework](https://twitter.com/nestframework)

````

## License

## Webhook Alert System

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

The application sends alerts to a configured webhook URL when environmental thresholds are exceeded:

**Webhook URL**: `https://webhook.site/#!/6c8b7e45-3a5e-4f89-9d2c-1b5a8f7e9c3d/your-unique-id`

**Alert Payload Structure:**

```json
{
  "deviceId": "sensor-001",
  "siteId": "site-alpha",
  "ts": "2025-09-25T10:30:00Z",
  "reason": "HIGH_TEMPERATURE",
  "value": 55.2
}
```

**Alert Triggers:**

- `HIGH_TEMPERATURE`: When temperature exceeds 50°C
- `HIGH_HUMIDITY`: When humidity exceeds 90%

## MongoDB Atlas Connection Notes

If using MongoDB Atlas:

1. **Whitelist IP Address**: Add your application's IP address to Atlas Network Access
2. **Database User**: Create a database user with read/write permissions
3. **Connection String**: Use the provided connection string format with your credentials
4. **SSL/TLS**: Atlas requires SSL connections (automatically handled by Mongoose)
5. **Connection Pooling**: The application uses Mongoose's built-in connection pooling for optimal performance

Example Atlas connection string:

```
mongodb+srv://telemetry_user:your_password@telemetry-cluster.abc123.mongodb.net/telemetry_db?retryWrites=true&w=majority
```

## AI Assistance in Development

This application was developed with significant AI assistance, which enhanced the development process in several key areas:

• **Architecture Design**: AI helped design the modular NestJS structure with proper separation of concerns between controllers, services, and data models, ensuring scalability and maintainability

• **Database Schema Optimization**: AI assisted in creating efficient MongoDB schemas and Redis caching strategies, optimizing data storage patterns and query performance for time-series telemetry data

• **Error Handling & Validation**: AI contributed to implementing comprehensive input validation using class-validator decorators and robust error handling mechanisms throughout the application pipeline

• **Real-time Alert Logic**: AI helped design and implement the threshold-based alerting system with configurable parameters and reliable webhook delivery mechanisms for critical environmental conditions

• **Aggregation Pipeline Development**: AI assisted in crafting complex MongoDB aggregation pipelines for site-level analytics, enabling efficient computation of statistical summaries across large datasets

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run start:dev

# Build for production
npm run build

# Run tests
npm run test

# Run end-to-end tests
npm run test:e2e

# Lint code
npm run lint

# Format code
npm run format
```

## Project Structure

```
src/
├── app.module.ts          # Root application module
├── main.ts               # Application entry point
└── telemetry/
    ├── telemetry.controller.ts   # REST API endpoints
    ├── telemetry.service.ts      # Business logic
    ├── telemetry.module.ts       # Module configuration
    ├── dto/
    │   └── create-telemetry.dto.ts  # Data validation
    └── schemas/
        └── telemetry.schema.ts      # MongoDB schema
```

## Technologies Used

- **Framework**: NestJS
- **Database**: MongoDB with Mongoose ODM
- **Caching**: Redis with ioredis client
- **Validation**: class-validator, class-transformer
- **HTTP Client**: Axios
- **Testing**: Jest, Supertest
- **Language**: TypeScript

## License

UNLICENSED - Private use only
