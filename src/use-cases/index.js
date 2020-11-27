import makeListProducts from './products/list-products';
import makeAddProduct from './products/add-product';
import makeUpdateProduct from './products/update-product';
import makeRemoveProduct from './products/remove-product';
import productsDb from '../data-access';

const listProducts = makeListProducts({ productsDb });
const addProduct = makeAddProduct({ productsDb });
const updateProduct = makeUpdateProduct({ productsDb });
const removeProduct = makeRemoveProduct({ productsDb });

export { listProducts, addProduct, updateProduct, removeProduct };
