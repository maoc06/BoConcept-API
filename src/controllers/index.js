import {
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
  listCartEnable,
  addCart,
  updateCart,
  removeCart,
} from '../use-cases';
// AUTH CONTROLLERS
import makeSignIn from './auth/signin';
import makeSignUp from './auth/signup';
// CUSTOMER CONTROLLERS
import makeGetCustomer from './customer/get-customer';
import makePutCustomer from './customer/put-customer';
import makeDeleteCustomer from './customer/delete-customer';
// PRODUCTS CONTROLLERS
import makeGetProducts from './products/get-products';
import makePostProduct from './products/post-product';
import makePutProduct from './products/put-product';
import makeDeleteProduct from './products/delete-product';
// CATEGORY CONTROLLERS
import makeGetCategory from './category/get-category';
import makePostCategory from './category/post-category';
import makePutCategory from './category/put-category';
import makeDeleteCategory from './category/delete-category';
// PAYMENT METHOD CONTROLLERS
import makeGetPaymentMethod from './payment-method/get-payment-method';
import makePostPaymentMethod from './payment-method/post-payment-method';
import makePutPaymentMethod from './payment-method/put-payment-method';
import makeDeletePaymentMethod from './payment-method/delete-payment-method';
// SHOPPING PRODUCT CONTROLLERS
import makeGetShoppingProduct from './shopping-product/get-shopping-product';
import makeGetShoppingProductByCart from './shopping-product/get-shopping-product-by-cart';
import makePostShoppingProduct from './shopping-product/post-shopping-product';
import makePutShoppingProduct from './shopping-product/put-shopping-product';
import makeDeleteShoppingProduct from './shopping-product/delete-shopping-product';
// CART CONTROLLERS
import makeGetCart from './cart/get-cart';
import makeGetCartByEmail from './cart/get-cart-by-email';
import makeGetCartEnable from './cart/get-cart-enable';
import makePostCart from './cart/post-cart';
import makePutCart from './cart/put-cart';
import makeDeleteCart from './cart/delete-cart';
// NOT FOUND CONTROLLER
import notFound from './not-found';

// AUTH CONTROLLERS EXEC
const signUp = makeSignUp({ addCustomer });
const signIn = makeSignIn({ authCredentials });
// CUSTOMER CONTROLLERS EXEC
const getCustomer = makeGetCustomer({ listCustomer });
const putCustomer = makePutCustomer({ updateCustomer });
const deleteCustomer = makeDeleteCustomer({ removeCustomer });
// PRODUCTS CONTROLLERS EXEC
const getProducts = makeGetProducts({ listProducts });
const postProduct = makePostProduct({ addProduct });
const putProduct = makePutProduct({ updateProduct });
const deleteProduct = makeDeleteProduct({ removeProduct });
// CATEGORY CONTROLLERS EXEC
const getCategory = makeGetCategory({ listCategory });
const postCategory = makePostCategory({ addCategory });
const putCategory = makePutCategory({ updateCategory });
const deleteCategory = makeDeleteCategory({ removeCategory });
// PAYMENT METHOD CONTROLLERS EXEC
const getPaymentMethod = makeGetPaymentMethod({ listPaymentMethod });
const postPaymentMethod = makePostPaymentMethod({ addPaymentMethod });
const putPaymentMethod = makePutPaymentMethod({ updatePaymentMethod });
const deletePaymentMethod = makeDeletePaymentMethod({ removePaymentMethod });
// SHOPPING PRODUCT CONTROLLERS EXEC
const getShoppingProduct = makeGetShoppingProduct({ listShoppingProduct });
const getShoppingProductByCart = makeGetShoppingProductByCart({
  listByCartShoppingProduct,
});
const postShoppingProduct = makePostShoppingProduct({ addShoppingProduct });
const putShoppingProduct = makePutShoppingProduct({ updateShoppingProduct });
const deleteShoppingProduct = makeDeleteShoppingProduct({
  removeShoppingProduct,
});
// CART CONTROLLERS EXEC
const getCart = makeGetCart({ listCart });
const getCartByEmail = makeGetCartByEmail({ listCartByEmail });
const getCartEnable = makeGetCartEnable({ listCartEnable });
const postCart = makePostCart({ addCart });
const putCart = makePutCart({ updateCart });
const deleteCart = makeDeleteCart({ removeCart });

export {
  signUp,
  signIn,
  getCustomer,
  putCustomer,
  deleteCustomer,
  getProducts,
  postProduct,
  putProduct,
  deleteProduct,
  getCategory,
  postCategory,
  putCategory,
  deleteCategory,
  getPaymentMethod,
  postPaymentMethod,
  putPaymentMethod,
  deletePaymentMethod,
  getShoppingProduct,
  getShoppingProductByCart,
  postShoppingProduct,
  putShoppingProduct,
  deleteShoppingProduct,
  getCart,
  getCartByEmail,
  getCartEnable,
  postCart,
  putCart,
  deleteCart,
  notFound,
};
