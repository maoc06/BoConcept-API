export default function makeGetCart({ listCart }) {
  return async function getCart(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const cart = await listCart({
        cartId: httpRequest.params.cartId,
      });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'List Cart',
          data: cart,
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
