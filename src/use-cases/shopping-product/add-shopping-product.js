import { makeShoppingProduct } from '../../models';

export default function makeAddShoppingProduct({
  shoppingProductDb,
  productsDb,
  cartDb,
}) {
  return async function addShoppingProduct(shoppingProductInfo) {
    const shoppingProduct = makeShoppingProduct(shoppingProductInfo);

    const productExisting = await productsDb.findById(
      shoppingProduct.getProductId(),
      false
    );
    if (!productExisting) {
      throw new Error('Product not existing');
    }

    const cartExisting = await cartDb.findById(shoppingProduct.getCarId());
    if (!cartExisting) {
      throw new Error('Cart not existing');
    }

    const productExistingInCart = await shoppingProductDb.findByProductInCart({
      car_id: shoppingProduct.getCarId(),
      pro_id: shoppingProduct.getProductId(),
    });
    if (productExistingInCart) {
      return shoppingProductDb.update({
        shpr_id: productExistingInCart.shpr_id,
        pro_id: shoppingProduct.getProductId(),
        car_id: shoppingProduct.getCarId(),
        quantity:
          productExistingInCart.quantity + shoppingProduct.getQuantity(),
      });
    }

    return shoppingProductDb.insert({
      pro_id: shoppingProduct.getProductId(),
      car_id: shoppingProduct.getCarId(),
      quantity: shoppingProduct.getQuantity(),
    });
  };
}
