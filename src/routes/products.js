const express = require('express');
const { getProducts } = require('../controllers');
const makeCallback = require('../express-callback');

function getProductsRoutes() {
    const router = express.Router();
    router.get('/', makeCallback(getProducts));
    router.get('/:id', makeCallback(getProducts));
    return router;
}

module.exports = { getProductsRoutes };