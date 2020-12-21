import { makeProductImage } from '../../../models';

export default function makeUpdateProductImage({ productImageDb }) {
  return async function updateProductImage(productImageInfo) {
    const productImage = makeProductImage(productImageInfo);

    const existing = await productImageDb.findById(productImage.getProductId());

    if (!existing) {
      throw new RangeError('Product image not found.');
    }

    return productImageDb.update({
      product_image_id: productImage.getProductImageId(),
      path: productImage.getPath(),
      pro_id: productImage.getProductId(),
    });
  };
}
