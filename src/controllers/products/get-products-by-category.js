export default function makeGetProductsByCategory({ listProductsByCategory }) {
  return async function getProductsByCategory(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const products = await listProductsByCategory({
        catId: httpRequest.params.id,
      });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'list products by category',
          data: products,
        },
      };
    } catch (e) {
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
}
