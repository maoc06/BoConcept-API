export default function makeRemoveFavorite({ favoriteDb }) {
  return async function removeFavorite(favoriteInfo) {
    const existing = await favoriteDb.findBySuperKey(favoriteInfo);

    if (!existing) {
      throw new RangeError('Favorite not found.');
    }

    const favorite = await favoriteDb.deleteBySuperKey(favoriteInfo);
    return favorite;
  };
}
