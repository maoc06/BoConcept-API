const Pool = require('pg').Pool;
const makeProductDb = require('./products-db');
const { config } = require('../../config');

const client = new Pool({
    user: config.dbUser,
    host: config.dbHost,
    database: config.dbName,
    password: config.dbPassword,
    port: config.dbPort,
});

function makeDb() {
    return client;
}

const productsDb = makeProductDb({ makeDb });

module.exports = { makeDb }
module.exports = productsDb;