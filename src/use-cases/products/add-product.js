import makeProduct from '../../models';

export default function makeAddProduct({ productsDb }) {
    return async function addProduct(productInfo) {
        const product = makeProduct(productInfo);
        // TODO -> Deberia verificar que es producto no exista
        return productsDb.insert({
            name: product.getName(),
            description: product.getDescription(),
            collection: product.getCollection(),
            price: product.getPrice()
        });
    }
}

// module.exports = makeAddProduct;