import {
    listProducts,
    addProduct,
    updateProduct,
    removeProduct,
} from '../use-cases';
import makeGetProducts from './products/get-products';
import makePostProduct from './products/post-product';
import makePutProduct from './products/put-product';
import makeDeleteProduct from './products/delete-product';
import notFound from './not-found';

const getProducts = makeGetProducts({ listProducts });
const postProduct = makePostProduct({ addProduct });
const putProduct = makePutProduct({ updateProduct });
const deleteProduct = makeDeleteProduct({ removeProduct });

export { getProducts, postProduct, putProduct, deleteProduct, notFound };
