export default function makeListCategory({ categoryDb }) {
  return async function listCategory({ catId } = {}) {
    if (catId) {
      const category = await categoryDb.findById(catId);
      if (!category) {
        throw new Error('Category not found');
      }
      return category;
    }
    const category = await categoryDb.findAll();
    return category;
  };
}
