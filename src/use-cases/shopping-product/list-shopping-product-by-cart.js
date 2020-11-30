export default function makeListByCartShoppingProduct({ shoppingProductDb }) {
  return async function listByCartShoppingProduct({ carId } = {}) {
    const shoppingProduct = await shoppingProductDb.findByCarId(carId);

    if (!shoppingProduct) {
      throw new RangeError('Shopping product not found.');
    }
    return shoppingProduct;
  };
}
