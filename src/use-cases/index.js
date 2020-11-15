const makeListProducts = require('./list-products');
const productsDb = require('../data-access');

const listProducts = makeListProducts({ productsDb });

module.exports = listProducts;