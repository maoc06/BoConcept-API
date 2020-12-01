/* eslint-disable no-empty-pattern */
/* eslint-disable camelcase */
export default function buildMakeShoppingProduct({}) {
  return function makeShoppingProduct({
    shpr_id,
    pro_id,
    car_id,
    quantity,
  } = {}) {
    if (!pro_id) {
      throw new Error('Shopping product must have a product id');
    }
    if (!car_id) {
      throw new Error('Shopping product must have a cart id');
    }
    if (!quantity) {
      throw new Error('Shopping product must have a quantity of product');
    }
    return Object.freeze({
      getShoopingProductId: () => shpr_id,
      getProductId: () => pro_id,
      getCarId: () => car_id,
      getQuantity: () => quantity,
    });
  };
}
