/* eslint-disable no-empty-pattern */
/* eslint-disable camelcase */
export default function buildMakeProductImage({}) {
  return function makeProductImage({ product_image_id, path, pro_id } = {}) {
    if (!path) {
      throw new Error('Product image must have a path');
    }
    if (!pro_id) {
      throw new Error('Product image must have a pro_id');
    }

    return Object.freeze({
      getProductImageId: () => product_image_id,
      getPath: () => path,
      getProductId: () => pro_id,
    });
  };
}
