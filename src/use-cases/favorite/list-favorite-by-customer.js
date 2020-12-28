export default function makeListFavoriteByCustomer({ favoriteDb }) {
  return async function listFavoriteByCustomer({ email } = {}) {
    const favorite = await favoriteDb.findByCustomer(email);

    if (!favorite) {
      throw new RangeError('Favorite by customer not found.');
    }
    return favorite;
  };
}
