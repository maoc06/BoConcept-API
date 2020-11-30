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
// DB ACCESS
import { productsDb, customerDb, categoryDb } from '../data-access';

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
};
