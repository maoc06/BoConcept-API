export default function makeGetProductsByQuery({ listProductsByQuery }) {
  return async function getProductsByQuery(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const products = await listProductsByQuery({
        query: httpRequest.params.query,
      });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'list products by query',
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
