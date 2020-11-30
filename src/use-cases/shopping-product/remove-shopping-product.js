export default function makeRemoveShoppingProduct({ shoppingProductDb }) {
  return async function removeShoppingProduct({ shprId } = {}) {
    if (!shprId) {
      throw new Error('You must supply a shopping product id');
    }

    const existing = await shoppingProductDb.findById(shprId);

    if (!existing) {
      throw new RangeError('Shopping product not found.');
    }

    const shoppingProduct = await shoppingProductDb.deleteById(shprId);
    return shoppingProduct;
  };
}
