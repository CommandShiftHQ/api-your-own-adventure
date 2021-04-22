const story = require('../utils/story');
const logger = require('../utils/logger');

exports.describeLocation = (req, res) => {
  const { locationName } = req.params;
  try {
    res.status(200).json(story.describeLocation(locationName));
  } catch (error) {
    logger.error(error);
    res.status(404).json(error.message);
  }
};

exports.resolveChoice = (req, res) => {
  const { locationName } = req.params;
  const { choice } = req.body;
  try {
    res.status(200).json(story.resolveChoice(locationName, choice));
  } catch (error) {
    logger.error(error);
    res.status(404).json(error.message);
  }
};
