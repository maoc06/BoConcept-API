const Pool = require('pg').Pool;
const { config } = require('../config');

class PostgresLib {

    connect() {
        return new Pool({
            user: config.dbUser,
            host: config.dbHost,
            database: config.dbName,
            password: config.dbPassword,
            port: config.dbPort,
        });

        // pool.connect((err, client, done) => {
        //     if (err) {
        //         return console.error('Error in PostgreSQL connection');
        //     }
        //     console.log('Connect succesfully to PostgreSQL');
        // });

        // return pool;
    }

    getAllProducts() {
        return this.connect().query('SELECT * FROM product');
        // return this.connect().query(
        //     'SELECT * FROM product',
        //     (err, data) => {
        //         if (err) {
        //             throw err;
        //         }
        //         return data.rows;
        //     }
        // );
    }


}

module.exports = PostgresLib;