const express = require('express');
const { getProductsRoutes } = require('./products');

function getRoutes() {
    const router = express.Router();
    router.use('/product', getProductsRoutes());
    return router;
}

module.exports = { getRoutes };