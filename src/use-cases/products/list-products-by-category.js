export default function makeListProductsByCategory({ productsDb, categoryDb }) {
  return async function listProductsByCategory({ catId } = {}) {
    const existing = await categoryDb.findById(catId);

    if (!existing) {
      throw new RangeError('Category not found.');
    }

    const products = await productsDb.findByCategory(catId);
    return products;
  };
}
