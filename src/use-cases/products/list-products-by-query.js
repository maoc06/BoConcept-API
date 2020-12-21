export default function makeListProductsByQuery({ productsDb }) {
  return async function listProductsByQuery({ query } = {}) {
    // const existing = await productsDb.findById(query);

    // if (!existing) {
    //   throw new RangeError('No match found.');
    // }

    const products = await productsDb.findByQuery(query);
    return products;
  };
}
