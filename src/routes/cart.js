import express from 'express';
import { cartControllers } from '../controllers';
import makeCallback from '../express-callback';
import authorize from '../utils/middlewares/authorization';
import { Admin, Customer } from '../utils/role';

function getCartRoutes() {
  const router = express.Router();
  router.get(
    '/',
    authorize([Admin, Customer]),
    makeCallback(cartControllers.getCart)
  );

  router.get(
    '/:cartId',
    authorize([Admin, Customer]),
    makeCallback(cartControllers.getCart)
  );

  router.get(
    '/by-customer/:email',
    authorize([Admin, Customer]),
    makeCallback(cartControllers.getCartByEmail)
  );

  router.get(
    '/by-enable/:email',
    authorize([Admin, Customer]),
    makeCallback(cartControllers.getCartEnable)
  );

  router.post(
    '/',
    authorize([Admin, Customer]),
    makeCallback(cartControllers.postCart)
  );

  router.put(
    '/',
    authorize([Admin, Customer]),
    makeCallback(cartControllers.putCart)
  );

  router.patch(
    '/credit-card',
    authorize([Admin, Customer]),
    makeCallback(cartControllers.patchCartCreditCard)
  );

  router.patch(
    '/billing-address',
    authorize([Admin, Customer]),
    makeCallback(cartControllers.patchCartBillingAddress)
  );

  router.patch(
    '/shipping-method',
    authorize([Admin, Customer]),
    makeCallback(cartControllers.patchCartShippingMethod)
  );

  router.patch(
    '/payment-date',
    authorize([Admin, Customer]),
    makeCallback(cartControllers.patchCartPaymentDate)
  );

  router.delete(
    '/:cartId',
    authorize([Admin, Customer]),
    makeCallback(cartControllers.deleteCart)
  );

  return router;
}

export { getCartRoutes };
