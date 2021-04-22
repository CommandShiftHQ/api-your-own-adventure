const STORY = require('../resources/story.json');

const formatLocation = (locationObject) => ({
  text: locationObject.text,
  choices: locationObject.choices.map((choice) => choice.label),
});

const getLocation = (locationName) => STORY.find((s) => s.title === locationName);

const location = (locationName) => formatLocation(getLocation(locationName));

const resolveChoice = (locationName, choiceName) => {
  const currentLocation = getLocation(locationName);
  const choice = currentLocation.choices.find((c) => c.label === choiceName);
  if (!choice) {
    return { message: `You can't '${choiceName}' here!` };
  }
  const newLocation = STORY.find((s) => s.title === choice.target);
  return { goTo: `/location/${encodeURIComponent(newLocation.title)}` };
};

module.exports = {
  formatLocation,
  getLocation,
  location,
  resolveChoice,
};
