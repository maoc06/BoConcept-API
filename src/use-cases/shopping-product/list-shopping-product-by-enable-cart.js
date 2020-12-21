export default function makeListByEnableCartShoppingProduct({
  shoppingProductDb,
}) {
  return async function listByEnableCartShoppingProduct({ email } = {}) {
    const shoppingProduct = await shoppingProductDb.findByEnableCarId(email);

    if (!shoppingProduct) {
      throw new RangeError('Shopping product not found.');
    }
    return shoppingProduct;
  };
}
