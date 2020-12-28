import express from 'express';
import { favoriteControllers } from '../controllers';
import makeCallback from '../express-callback';
import authorize from '../utils/middlewares/authorization';
import { Admin, Customer } from '../utils/role';

function getFavoriteRoutes() {
  const router = express.Router();

  router.get(
    '/:email',
    authorize([Admin, Customer]),
    makeCallback(favoriteControllers.getFavoriteByCustomer)
  );

  router.post(
    '/',
    authorize([Admin, Customer]),
    makeCallback(favoriteControllers.postFavorite)
  );

  router.delete(
    '/:owner/:proId',
    authorize([Admin, Customer]),
    makeCallback(favoriteControllers.deleteFavorite)
  );

  return router;
}

export { getFavoriteRoutes };
