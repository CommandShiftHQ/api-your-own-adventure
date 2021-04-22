const express = require('express');
const swaggerUi = require('swagger-ui-express');
const story = require('./utils/story');
const swagger = require('../swagger.json');

const app = express();

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swagger));

app.get('/location/:locationName', (req, res) => {
  const { locationName } = req.params;
  res.status(200).json(story.location(locationName));
});

app.post('/location/:locationName', (req, res) => {
  const { locationName } = req.params;
  const { choice } = req.body;
  res.status(200).json(story.resolveChoice(locationName, choice));
});

module.exports = app;
