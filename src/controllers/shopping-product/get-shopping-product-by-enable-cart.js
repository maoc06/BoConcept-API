export default function makeGetShoppingProductByEnableCart({
  listByEnableCartShoppingProduct,
}) {
  return async function getShoppingProductByEnableCart(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const shoppingProducts = await listByEnableCartShoppingProduct({
        email: httpRequest.params.email,
      });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'List shopping products by enable cart',
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
