import makeListFavoriteByCustomer from './list-favorite-by-customer';
import makeAddFavorite from './add-favorite';
import makeRemoveFavorite from './remove-favorite';

import { favoriteDb } from '../../data-access';

const listFavoriteByCustomer = makeListFavoriteByCustomer({ favoriteDb });
const addFavorite = makeAddFavorite({ favoriteDb });
const removeFavorite = makeRemoveFavorite({ favoriteDb });

export default {
  listFavoriteByCustomer,
  addFavorite,
  removeFavorite,
};
