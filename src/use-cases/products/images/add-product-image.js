import { makeProductImage } from '../../../models';

export default function makeAddProductImage({ productImageDb }) {
  return async function addProductImage(productImageInfo) {
    const productImage = makeProductImage(productImageInfo);

    return productImageDb.insert({
      path: productImage.getPath(),
      pro_id: productImage.getProductId(),
    });
  };
}
