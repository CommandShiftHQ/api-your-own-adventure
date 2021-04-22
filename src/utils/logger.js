/* eslint-disable no-console */
const info = (message) => {
  console.info(message);
};

const log = (message) => {
  console.log(message);
};

const warn = (message) => {
  console.warn(message);
};

const error = (message) => {
  console.error(message);
};

module.exports = {
  info,
  log,
  warn,
  error,
};
