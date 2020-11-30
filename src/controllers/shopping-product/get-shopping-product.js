export default function makeGetShoppingProduct({ listShoppingProduct }) {
  return async function getShoppingProduct(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const shoppingProducts = await listShoppingProduct({
        shprId: httpRequest.params.shprId,
      });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'List shopping products',
          data: shoppingProducts,
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
