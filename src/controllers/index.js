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
  notFound,
};
