import makeProduct from '../../models';

export default function makeUpdateProduct({ productsDb }) {
    return async function updateProduct(productInfo) {
        const product = makeProduct(productInfo);

        const existing = await productsDb.findById(product.getId());

        if (!existing) {
            throw new RangeError('Product not found.');
        }

        return productsDb.update({
            pro_id: product.getId(),
            name: product.getName(),
            description: product.getDescription(),
            collection: product.getCollection(),
            price: product.getPrice(),
        });
    };
}
