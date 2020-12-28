/* eslint-disable no-empty-pattern */
/* eslint-disable camelcase */
export default function buildMakeFavorite({}) {
  return function makeFavorite({ customer_owner, pro_id } = {}) {
    if (!customer_owner) {
      throw new Error('Favorite must have a owner');
    }
    if (!pro_id) {
      throw new Error('Favorite must have a product id');
    }
    return Object.freeze({
      getOwner: () => customer_owner,
      getProductId: () => pro_id,
    });
  };
}
