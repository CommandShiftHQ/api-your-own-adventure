const expressListRoutes = require('express-list-routes');
const app = require('./src/app');
const logger = require('./src/utils/logger');

const APP_PORT = process.env.PORT || 3000;

app.listen(APP_PORT, () => {
  expressListRoutes(app);
  logger.info(`app is listening on localhost:${APP_PORT}`);
});
