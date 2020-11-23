import express from 'express';
import { getProductsRoutes } from './products';
import { notFound } from '../controllers';
import makeCallback from '../express-callback';

function getRoutes() {
    const router = express.Router();
    router.use('/product', getProductsRoutes());
    router.use(makeCallback(notFound));
    return router;
}

export { getRoutes };