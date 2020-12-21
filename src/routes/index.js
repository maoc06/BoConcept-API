import express from 'express';
import { getAuthRoutes } from './auth';
import { getProductsRoutes } from './products';
import { getCustomerRoutes } from './customer';
import { getCategoryRoutes } from './category';
import { getPaymentMethodRoutes } from './payment-method';
import { getCreditCardRoutes } from './credit-card';
import { getShoppingProductRoutes } from './shopping-product';
import { getShippingMethodRoutes } from './shipping-method';
import { getAddressRoutes } from './address';
import { getCartRoutes } from './cart';
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
  router.use('/credit-card', verifyToken, getCreditCardRoutes());
  router.use('/shopping-product', verifyToken, getShoppingProductRoutes());
  router.use('/shipping-method', verifyToken, getShippingMethodRoutes());
  router.use('/address', verifyToken, getAddressRoutes());
  router.use('/cart', verifyToken, getCartRoutes());
  router.use(makeCallback(notFound));
  return router;
}

export { getRoutes };
