export default function makeRemoveCategory({ categoryDb }) {
  return async function removeCategory({ catId } = {}) {
    if (!catId) {
      throw new Error('You must supply a category id');
    }

    const existing = await categoryDb.findById(catId);
    if (!existing) {
      throw new RangeError('Category not found.');
    }
    const category = await categoryDb.deleteById(catId);
    return category;
  };
}
