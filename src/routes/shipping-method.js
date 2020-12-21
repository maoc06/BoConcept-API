import express from 'express';
import { shippingMethodControllers } from '../controllers';
import makeCallback from '../express-callback';
import authorize from '../utils/middlewares/authorization';
import { Admin, Customer } from '../utils/role';

function getShippingMethodRoutes() {
  const router = express.Router();
  router.get(
    '/',
    authorize([Admin, Customer]),
    makeCallback(shippingMethodControllers.getShippingMethod)
  );

  router.get(
    '/:shippingMethodId',
    authorize([Admin, Customer]),
    makeCallback(shippingMethodControllers.getShippingMethod)
  );

  router.post(
    '/',
    authorize(Admin),
    makeCallback(shippingMethodControllers.postShippingMethod)
  );

  router.put(
    '/',
    authorize(Admin),
    makeCallback(shippingMethodControllers.putShippingMethod)
  );

  router.delete(
    '/:shippingMethodId',
    authorize(Admin),
    makeCallback(shippingMethodControllers.deleteShippingMethod)
  );
  return router;
}

export { getShippingMethodRoutes };
