export default function makeGetCartByEmail({ listCartByEmail }) {
  return async function getCartByEmail(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const cart = await listCartByEmail({
        email: httpRequest.params.email,
      });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'List Cart by email',
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
