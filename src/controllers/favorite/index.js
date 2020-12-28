import { favoriteUseCases } from '../../use-cases';

import makeGetFavoriteByCustomer from './get-favorite-by-customer';
import makePostFavorite from './post-favorite';
import makeDeleteFavorite from './delete-favorite';

const {
  listFavoriteByCustomer,
  addFavorite,
  removeFavorite,
} = favoriteUseCases;

const getFavoriteByCustomer = makeGetFavoriteByCustomer({
  listFavoriteByCustomer,
});
const postFavorite = makePostFavorite({ addFavorite });
const deleteFavorite = makeDeleteFavorite({ removeFavorite });

export default {
  getFavoriteByCustomer,
  postFavorite,
  deleteFavorite,
};
