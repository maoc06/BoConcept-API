export default function makeRemoveProductImage({ productImageDb }) {
  return async function removeProductImage({ productImageId } = {}) {
    if (!productImageId) {
      throw new Error('You must supply a product image id');
    }

    const existing = await productImageDb.findById(productImageId);

    if (!existing) {
      throw new RangeError('Product image not found.');
    }

    const product = await productImageDb.deleteById(productImageId);
    return product;
  };
}
