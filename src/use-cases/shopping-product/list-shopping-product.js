export default function makeListShoppingProduct({ shoppingProductDb }) {
  return async function listShoppingProduct({ shprId } = {}) {
    if (shprId) {
      const shoppingProduct = await shoppingProductDb.findById(shprId);

      if (!shoppingProduct) {
        throw new RangeError('Shopping product not found.');
      }
      return shoppingProduct;
    }
    const shoppingProduct = await shoppingProductDb.findAll();
    return shoppingProduct;
  };
}
