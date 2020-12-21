import { productUseCases } from '../../use-cases';

import makeGetProducts from './get-products';
import makeGetProductsByCategory from './get-products-by-category';
import makeGetProductsByQuery from './get-products-by-query';
import makePostProduct from './post-product';
import makePutProduct from './put-product';
import makeDeleteProduct from './delete-product';
import makeGetProductImage from './images/get-product-image';
import makePostProductImage from './images/post-product-image';
import makePutProductImage from './images/put-product-image';
import makeDeleteProductImage from './images/delete-product-image';

const {
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
} = productUseCases;

const getProducts = makeGetProducts({ listProducts });
const getProductsByCategory = makeGetProductsByCategory({
  listProductsByCategory,
});
const getProductsByQuery = makeGetProductsByQuery({ listProductsByQuery });
const postProduct = makePostProduct({ addProduct });
const putProduct = makePutProduct({ updateProduct });
const deleteProduct = makeDeleteProduct({ removeProduct });
const getProductImage = makeGetProductImage({ listProductImage });
const postProductImage = makePostProductImage({ addProductImage });
const putProductImage = makePutProductImage({ updateProductImage });
const deleteProductImage = makeDeleteProductImage({ removeProductImage });

export default {
  getProducts,
  getProductsByCategory,
  getProductsByQuery,
  postProduct,
  putProduct,
  deleteProduct,
  getProductImage,
  postProductImage,
  putProductImage,
  deleteProductImage,
};
