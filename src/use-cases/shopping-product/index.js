import makeListShoppingProduct from './list-shopping-product';
import makeListByCartShoppingProduct from './list-shopping-product-by-cart';
import makeListByEnableCartShoppingProduct from './list-shopping-product-by-enable-cart';
import makeAddShoppingProduct from './add-shopping-product';
import makeUpdateShoppingProduct from './update-shopping-product';
import makeRemoveShoppingProduct from './remove-shopping-product';

import { productsDb, shoppingProductDb, cartDb } from '../../data-access';

const listShoppingProduct = makeListShoppingProduct({ shoppingProductDb });
const listByCartShoppingProduct = makeListByCartShoppingProduct({
  shoppingProductDb,
});
const listByEnableCartShoppingProduct = makeListByEnableCartShoppingProduct({
  shoppingProductDb,
});
const addShoppingProduct = makeAddShoppingProduct({
  shoppingProductDb,
  productsDb,
  cartDb,
});
const updateShoppingProduct = makeUpdateShoppingProduct({ shoppingProductDb });
const removeShoppingProduct = makeRemoveShoppingProduct({ shoppingProductDb });

export default {
  listShoppingProduct,
  listByCartShoppingProduct,
  listByEnableCartShoppingProduct,
  addShoppingProduct,
  updateShoppingProduct,
  removeShoppingProduct,
};
