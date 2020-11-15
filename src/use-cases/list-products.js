function makeListProducts({ productsDb }) {

    return async function listProducts({ proId } = {}) {
        if (proId) {
            const product = await productsDb.findById(proId);
            return product;
        }
        const products = await productsDb.findAll();
        return products;
    }

}

module.exports = makeListProducts;