import makeListProducts from './list-products';
import makeListProductsByCategory from './list-products-by-category';
import makeListProductsByQuery from './list-products-by-query';
import makeAddProduct from './add-product';
import makeUpdateProduct from './update-product';
import makeRemoveProduct from './remove-product';
import makeListProductImage from './images/list-product-images';
import makeAddProductImage from './images/add-product-image';
import makeUpdateProductImage from './images/update-product-image';
import makeRemoveProductImage from './images/remove-product.-image';

import { productsDb, productImageDb, categoryDb } from '../../data-access';

const listProducts = makeListProducts({ productsDb });
const listProductsByCategory = makeListProductsByCategory({
  productsDb,
  categoryDb,
});
const listProductsByQuery = makeListProductsByQuery({ productsDb });
const addProduct = makeAddProduct({ productsDb });
const updateProduct = makeUpdateProduct({ productsDb });
const removeProduct = makeRemoveProduct({ productsDb });
const listProductImage = makeListProductImage({ productImageDb });
const addProductImage = makeAddProductImage({ productImageDb });
const updateProductImage = makeUpdateProductImage({ productImageDb });
const removeProductImage = makeRemoveProductImage({ productImageDb });

export default {
  listProducts,
  listProductsByCategory,
  listProductsByQuery,
  addProduct,
  updateProduct,
  removeProduct,
  listProductImage,
  addProductImage,
  updateProductImage,
  removeProductImage,
};
