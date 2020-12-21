export default function makeListProductImage({ productImageDb }) {
  return async function listProductImage({ proId } = {}) {
    const product = await productImageDb.findByProduct(proId);

    if (!product) {
      throw new RangeError('Product images not found.');
    }
    return product;
  };
}
