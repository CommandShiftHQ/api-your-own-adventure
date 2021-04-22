const app = require('./src/app');
const logger = require('./src/utils/logger');

const APP_PORT = process.env.PORT || 3000;

app.listen(APP_PORT, () => logger.info(`app is listening on localhost:${APP_PORT}`));
