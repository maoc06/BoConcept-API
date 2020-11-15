const listProducts = require('../use-cases');
const makeGetProducts = require('./get-products');

const getProducts = makeGetProducts({ listProducts });

module.exports = { getProducts };