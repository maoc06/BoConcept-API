export default function makeDeleteCart({ removeCart }) {
  return async function deleteCart(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      await removeCart({ cartId: httpRequest.params.cartId });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'Cart successfully deleted',
          data: {},
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
