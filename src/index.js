const express = require('express');
const bodyParser = require('body-parser');
const { config } = require('../config/index');
// const routes = require('./routes');
const { getProducts } = require('./controllers');
const makeCallback = require('./express-callback');

const app = express();
app.use(bodyParser.json());

// routes(app);

app.get('/api/v1/products', makeCallback(getProducts));

app.listen(config.port, () => {
    console.log(`Server running on http://localhost:${config.port}`);
});