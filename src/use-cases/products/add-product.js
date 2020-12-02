import { makeProduct } from '../../models';

export default function makeAddProduct({ productsDb }) {
  return async function addProduct(productInfo) {
    const product = makeProduct(productInfo);

    // Verificar que el producto no exista
    const existing = await productsDb.findById(product.getId());
    if (existing) {
      throw new Error('Product already exists.');
    }

    return productsDb.insert({
      pro_id: product.getId(),
      name: product.getName(),
      description: product.getDescription(),
      collection: product.getCollection(),
      price: product.getPrice(),
      enable: product.getEnable(),
    });
  };
}
