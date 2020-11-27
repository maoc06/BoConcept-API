import Pool from 'pg';
import makeProductDb from './products-db';
import { config } from '../../config';

const client = new Pool.Pool({
    user: config.dbUser,
    host: config.dbHost,
    database: config.dbName,
    password: config.dbPassword,
    port: config.dbPort,
});

export function makeDb() {
    return client;
}

const productsDb = makeProductDb({ makeDb });
export default productsDb;
