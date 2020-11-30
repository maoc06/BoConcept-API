import { makeShoppingProduct } from '../../models';

export default function makeAddShoppingProduct({
  shoppingProductDb,
  productsDb,
  cartDb,
}) {
  return async function addShoppingProduct(shoppingProductInfo) {
    const shoppingProduct = makeShoppingProduct(shoppingProductInfo);

    const productExisting = await productsDb.findById(
      shoppingProduct.getProductId()
    );
    if (!productExisting) {
      throw new Error('Product not existing');
    }

    const cartExisting = await cartDb.findById(shoppingProduct.getCarId());
    if (!cartExisting) {
      throw new Error('Cart not existing');
    }

    return shoppingProductDb.insert({
      pro_id: shoppingProduct.getProductId(),
      car_id: shoppingProduct.getCarId(),
      quantity: shoppingProduct.getQuantity(),
      total: shoppingProduct.getTotal(),
    });
  };
}
