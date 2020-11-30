export default function makePostShoppingProduct({ addShoppingProduct }) {
  return async function postShoppingProduct(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const { ...shoppingProductInfo } = httpRequest.body;
      const shoppingProduct = await addShoppingProduct({
        ...shoppingProductInfo,
      });

      return {
        headers,
        statusCode: 201,
        body: {
          message: 'Shopping product successfully added',
          data: shoppingProduct,
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
