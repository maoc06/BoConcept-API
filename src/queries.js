import Pool from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST_NAME,
    database: process.env.DB,
    password: process.env.PASSWORD,
    port: process.env.PORT,
});

const testQuery = (req, res) => {
    pool.query('SELECT * FROM product', (err, data) => {
        if (err) {
            throw err;
        }
        res.status(200).json(data.rows);
    });
}

module.exports = {
    testQuery,
}