const express = require('express');
const ProductService = require('../service/products');

function routes(app) {
    const router = express.Router();
    app.use('/api/v1/products', router);

    const productsService = new ProductService();

    router.get('/', async function(req, res) {
        // Este try-catch deberia ser mi controller
        try {
            const products = await productsService.getProducts();

            res.status(200).json({
                data: products,
                message: 'all products listed',
            });

        } catch (error) {
            console.log(error);
        }
    });
}

module.exports = routes;