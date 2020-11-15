function makeListProducts({ productsDb }) {

    return async function listProducts() {
        const products = await productsDb.findAll();
        return products;
    }

}

module.exports = makeListProducts;