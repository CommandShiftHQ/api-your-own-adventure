const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swagger = require('../swagger.json');
const locationRouter = require('./routes/location');

const app = express();

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swagger));

app.use('/location', locationRouter);

module.exports = app;
