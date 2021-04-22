const express = require('express');
const swaggerUi = require('swagger-ui-express');
const story = require('./utils/story');
const swagger = require('../swagger.json');
const logger = require('./utils/logger');

const app = express();

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swagger));

app.get('/location/:locationName', (req, res) => {
  const { locationName } = req.params;
  try {
    res.status(200).json(story.describeLocation(locationName));
  } catch (error) {
    logger.error(error);
    res.status(404).json(error.message);
  }
});

app.post('/location/:locationName', (req, res) => {
  const { locationName } = req.params;
  const { choice } = req.body;
  try {
    res.status(200).json(story.resolveChoice(locationName, choice));
  } catch (error) {
    logger.error(error);
    res.status(404).json(error.message);
  }
});

module.exports = app;
