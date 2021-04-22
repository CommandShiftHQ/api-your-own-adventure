const express = require('express');
const story = require('./utils/story');

const app = express();

app.use(express.json());

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
