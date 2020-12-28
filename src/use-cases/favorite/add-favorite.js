import { makeFavorite } from '../../models';

export default function makeAddFavorite({ favoriteDb }) {
  return async function addFavorite(favoriteInfo) {
    const favorite = makeFavorite(favoriteInfo);

    return favoriteDb.insert({
      customer_owner: favorite.getOwner(),
      pro_id: favorite.getProductId(),
    });
  };
}
