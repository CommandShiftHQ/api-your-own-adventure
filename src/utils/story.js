const STORY = require('../resources/story.json');

const formatLocation = (location) => ({
  text: location.text,
  choices: location.choices.map((choice) => choice.label),
});

const getLocation = (locationName) => {
  const location = STORY.find((s) => s.title === locationName);
  if (!location) {
    throw new Error(`location '${locationName}' does not exist`);
  }
  return location;
};

const describeLocation = (locationName) => formatLocation(getLocation(locationName));

const resolveChoice = (locationName, choiceName) => {
  const location = getLocation(locationName);
  const choice = location.choices.find((c) => c.label.toLowerCase() === choiceName.toLowerCase());
  if (!choice) {
    return { message: `You can't '${choiceName}' here!` };
  }
  const newLocation = STORY.find((s) => s.title === choice.target);
  return { goTo: `/location/${encodeURIComponent(newLocation.title)}` };
};

module.exports = {
  formatLocation,
  getLocation,
  describeLocation,
  resolveChoice,
};
