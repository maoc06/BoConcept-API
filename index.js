/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
const { config } = require('./config');

if (config.dev) {
  require('nodemon')({ script: 'dev.js' });
} else {
  require('./dist');
}
