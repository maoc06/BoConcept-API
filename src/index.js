const express = require('express');
const bodyParser = require('body-parser');
const { config } = require('../config/index');
const { getRoutes } = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use('/api', getRoutes());

app.listen(config.port, () => {
    console.log(`Server running on http://localhost:${config.port}`);
});