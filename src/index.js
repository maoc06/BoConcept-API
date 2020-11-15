const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { config } = require('./config/index');

const app = express();
app.use(bodyParser.json());

routes(app);

app.listen(config.port, () => {
    console.log(`Server running on http://localhost:${config.port}`);
});