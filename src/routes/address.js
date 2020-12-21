import express from 'express';
import { addressControllers } from '../controllers';
import makeCallback from '../express-callback';
import authorize from '../utils/middlewares/authorization';
import { Admin, Customer } from '../utils/role';

function getAddressRoutes() {
  const router = express.Router();
  router.get(
    '/:id',
    authorize([Admin, Customer]),
    makeCallback(addressControllers.getAddress)
  );

  router.get(
    '/by-customer/:email',
    authorize([Admin, Customer]),
    makeCallback(addressControllers.getAddresByCustomer)
  );

  router.post(
    '/',
    authorize([Admin, Customer]),
    makeCallback(addressControllers.postAddress)
  );

  router.put(
    '/',
    authorize([Admin, Customer]),
    makeCallback(addressControllers.putAddress)
  );

  router.delete(
    '/:addressId',
    authorize([Admin, Customer]),
    makeCallback(addressControllers.deleteAddress)
  );
  return router;
}

export { getAddressRoutes };
