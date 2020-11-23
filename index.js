const { config } = require('./config');

if (config.dev) {
    require('nodemon')({ script: 'dev.js' })
} else {
    require('./dist')
}