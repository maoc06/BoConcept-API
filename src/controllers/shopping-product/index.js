import { shoppingProductUseCases } from '../../use-cases';

import makeGetShoppingProduct from './get-shopping-product';
import makeGetShoppingProductByCart from './get-shopping-product-by-cart';
import makeGetShoppingProductByEnableCart from './get-shopping-product-by-enable-cart';
import makePostShoppingProduct from './post-shopping-product';
import makePutShoppingProduct from './put-shopping-product';
import makeDeleteShoppingProduct from './delete-shopping-product';

const {
  listShoppingProduct,
  listByCartShoppingProduct,
  listByEnableCartShoppingProduct,
  addShoppingProduct,
  updateShoppingProduct,
  removeShoppingProduct,
} = shoppingProductUseCases;

const getShoppingProduct = makeGetShoppingProduct({ listShoppingProduct });
const getShoppingProductByCart = makeGetShoppingProductByCart({
  listByCartShoppingProduct,
});
const getShoppingProductByEnableCart = makeGetShoppingProductByEnableCart({
  listByEnableCartShoppingProduct,
});
const postShoppingProduct = makePostShoppingProduct({ addShoppingProduct });
const putShoppingProduct = makePutShoppingProduct({ updateShoppingProduct });
const deleteShoppingProduct = makeDeleteShoppingProduct({
  removeShoppingProduct,
});

export default {
  getShoppingProduct,
  getShoppingProductByCart,
  getShoppingProductByEnableCart,
  postShoppingProduct,
  putShoppingProduct,
  deleteShoppingProduct,
};
