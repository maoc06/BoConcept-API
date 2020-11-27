export default function makeRemoveProduct({ productsDb }) {
    return async function removeProduct({ proId } = {}) {
        if (!proId) {
            throw new Error('You must supply a product id');
        }

        const existing = await productsDb.findById(proId);

        if (!existing) {
            throw new RangeError('Product not found.');
        }

        const product = await productsDb.deleteById(proId);
        return product;
    };
}
