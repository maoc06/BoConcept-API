// AUTH
import makeAuthCredentials from './auth/auth-crendentials';
import makeHandleToken from '../utils/handle-token';
// CUSTOMERS
import makeListCustomer from './customer/list-customer';
import makeAddCustomer from './customer/add-customer';
import makeUpdateCustomer from './customer/update-customer';
import makeRemoveCustomer from './customer/remove-customer';
// PRODUCTS
import makeListProducts from './products/list-products';
import makeAddProduct from './products/add-product';
import makeUpdateProduct from './products/update-product';
import makeRemoveProduct from './products/remove-product';
// CATEGORY
import makeListCategory from './category/list-category';
import makeAddCategory from './category/add-category';
import makeUpdateCategory from './category/update-category';
import makeRemoveCategory from './category/remove-category';
// PAYMENT METHOD
import makeListPaymentMethod from './payment-method/list-payment-method';
import makeAddPaymentMethod from './payment-method/add-payment-method';
import makeUpdatePaymentMethod from './payment-method/update-payment-method';
import makeRemovePaymentMethod from './payment-method/remove-payment-method';
// SHOPPING PRODUCT
import makeListShoppingProduct from './shopping-product/list-shopping-product';
import makeListByCartShoppingProduct from './shopping-product/list-shopping-product-by-cart';
import makeAddShoppingProduct from './shopping-product/add-shopping-product';
import makeUpdateShoppingProduct from './shopping-product/update-shopping-product';
import makeRemoveShoppingProduct from './shopping-product/remove-shopping-product';
// CART
import makeListCart from './cart/list-cart';
import makeListCartByEmail from './cart/list-cart-by-email';
import makeAddCart from './cart/add-cart';
import makeUpdateCart from './cart/update-cart';
import makeRemoveCart from './cart/remove-cart';
// DB ACCESS
import {
  productsDb,
  customerDb,
  categoryDb,
  paymentMethodDb,
  shoppingProductDb,
  cartDb,
} from '../data-access';

const handleToken = makeHandleToken();
const authCredentials = makeAuthCredentials({ customerDb, handleToken });
const listCustomer = makeListCustomer({ customerDb });
const addCustomer = makeAddCustomer({ customerDb });
const updateCustomer = makeUpdateCustomer({ customerDb });
const removeCustomer = makeRemoveCustomer({ customerDb });
const listProducts = makeListProducts({ productsDb });
const addProduct = makeAddProduct({ productsDb });
const updateProduct = makeUpdateProduct({ productsDb });
const removeProduct = makeRemoveProduct({ productsDb });
const listCategory = makeListCategory({ categoryDb });
const addCategory = makeAddCategory({ categoryDb });
const updateCategory = makeUpdateCategory({ categoryDb });
const removeCategory = makeRemoveCategory({ categoryDb });
const listPaymentMethod = makeListPaymentMethod({ paymentMethodDb });
const addPaymentMethod = makeAddPaymentMethod({ paymentMethodDb });
const updatePaymentMethod = makeUpdatePaymentMethod({ paymentMethodDb });
const removePaymentMethod = makeRemovePaymentMethod({ paymentMethodDb });
const listShoppingProduct = makeListShoppingProduct({ shoppingProductDb });
const listByCartShoppingProduct = makeListByCartShoppingProduct({
  shoppingProductDb,
});
const addShoppingProduct = makeAddShoppingProduct({
  shoppingProductDb,
  productsDb,
  cartDb,
});
const updateShoppingProduct = makeUpdateShoppingProduct({ shoppingProductDb });
const removeShoppingProduct = makeRemoveShoppingProduct({ shoppingProductDb });
const listCart = makeListCart({ cartDb });
const listCartByEmail = makeListCartByEmail({ cartDb, customerDb });
const addCart = makeAddCart({ cartDb, customerDb });
const updateCart = makeUpdateCart({ cartDb, paymentMethodDb });
const removeCart = makeRemoveCart({ cartDb });

export {
  authCredentials,
  listCustomer,
  addCustomer,
  updateCustomer,
  removeCustomer,
  listProducts,
  addProduct,
  updateProduct,
  removeProduct,
  listCategory,
  addCategory,
  updateCategory,
  removeCategory,
  listPaymentMethod,
  addPaymentMethod,
  updatePaymentMethod,
  removePaymentMethod,
  listShoppingProduct,
  listByCartShoppingProduct,
  addShoppingProduct,
  updateShoppingProduct,
  removeShoppingProduct,
  listCart,
  listCartByEmail,
  addCart,
  updateCart,
  removeCart,
};
