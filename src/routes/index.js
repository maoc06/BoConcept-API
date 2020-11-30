import express from 'express';
import { getAuthRoutes } from './auth';
import { getProductsRoutes } from './products';
import { getCustomerRoutes } from './customer';
import { getCategoryRoutes } from './category';
import { getPaymentMethodRoutes } from './payment-method';
import { notFound } from '../controllers';
import makeCallback from '../express-callback';
import verifyToken from '../utils/middlewares/verifyToken';

function getRoutes() {
  const router = express.Router();
  router.use('/auth', getAuthRoutes());
  router.use('/customer', verifyToken, getCustomerRoutes());
  router.use('/product', verifyToken, getProductsRoutes());
  router.use('/category', verifyToken, getCategoryRoutes());
  router.use('/paymethod', verifyToken, getPaymentMethodRoutes());
  router.use(makeCallback(notFound));
  return router;
}

export { getRoutes };
