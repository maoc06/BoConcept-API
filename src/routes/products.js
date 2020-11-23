import express from 'express';
import {
    getProducts,
    postProduct,
    putProduct,
    deleteProduct,
} from '../controllers';
import makeCallback from '../express-callback';

function getProductsRoutes() {
    const router = express.Router();
    router.get('/', makeCallback(getProducts));
    router.get('/:id', makeCallback(getProducts));
    router.post('/', makeCallback(postProduct));
    router.put('/', makeCallback(putProduct));
    router.delete('/:id', makeCallback(deleteProduct));
    return router;
}

export { getProductsRoutes };