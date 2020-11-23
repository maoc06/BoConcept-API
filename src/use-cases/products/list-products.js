export default function makeListProducts({ productsDb }) {

    return async function listProducts({ proId } = {}) {
        if (proId) {
            const existing = await productsDb.findById(proId);

            if (!existing) {
                throw new RangeError('Product not found.');
            }

            const product = await productsDb.findById(proId);
            return product;
        }
        const products = await productsDb.findAll();
        return products;
    }

}

// module.exports = makeListProducts;