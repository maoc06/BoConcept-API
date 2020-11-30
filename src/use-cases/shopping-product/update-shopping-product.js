import { makeShoppingProduct } from '../../models';

export default function makeUpdateShoppingProduct({ shoppingProductDb }) {
  return async function updateShoppingProduct(shoppingProductInfo) {
    const shoppingProduct = makeShoppingProduct(shoppingProductInfo);

    const existing = await shoppingProductDb.findById(
      shoppingProduct.getShoopingProductId()
    );

    if (!existing) {
      throw new RangeError('Shopping product not found.');
    }

    return shoppingProductDb.update({
      shpr_id: shoppingProduct.getShoopingProductId(),
      pro_id: shoppingProduct.getProductId(),
      car_id: shoppingProduct.getCarId(),
      quantity: shoppingProduct.getQuantity(),
      total: shoppingProduct.getTotal(),
    });
  };
}
