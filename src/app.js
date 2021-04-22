const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swagger = require('../swagger.json');
const locationController = require('./controllers/location');

const app = express();

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swagger));

app.get('/location/:locationName', locationController.describeLocation);

app.post('/location/:locationName', locationController.resolveChoice);

module.exports = app;
