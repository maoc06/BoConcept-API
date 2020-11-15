const PostgresLib = require('../lib/postgres');

class ProductService {
    constructor() {
        this.postgres = new PostgresLib();
    }

    async getProducts() {
        const products = await Promise.resolve(
            (await this.postgres.getAllProducts()).rows
        );
        return products || [];
    }
}

module.exports = ProductService;