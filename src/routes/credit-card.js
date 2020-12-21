import express from 'express';
import { creditCardControllers } from '../controllers';
import makeCallback from '../express-callback';
import authorize from '../utils/middlewares/authorization';
import { Admin, Customer } from '../utils/role';

function getCreditCardRoutes() {
  const router = express.Router();
  router.get(
    '/',
    authorize([Admin, Customer]),
    makeCallback(creditCardControllers.getCreditCard)
  );

  router.get(
    '/:id',
    authorize([Admin, Customer]),
    makeCallback(creditCardControllers.getCreditCard)
  );

  router.get(
    '/by-customer/:email',
    authorize([Admin, Customer]),
    makeCallback(creditCardControllers.getCreditCardByCustomer)
  );

  router.post(
    '/',
    authorize(Admin),
    makeCallback(creditCardControllers.postCreditCard)
  );

  router.put(
    '/',
    authorize(Admin),
    makeCallback(creditCardControllers.putCreditCard)
  );

  router.delete(
    '/:id',
    authorize(Admin),
    makeCallback(creditCardControllers.deleteCreditCard)
  );
  return router;
}

export { getCreditCardRoutes };
