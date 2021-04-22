const express = require('express');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const swagger = require('../swagger.json');
const locationRouter = require('./routes/location');

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.static('public'));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swagger));

app.use('/location', locationRouter);

app.get('*', (_, res) => {
  res.redirect('/');
});

module.exports = app;
