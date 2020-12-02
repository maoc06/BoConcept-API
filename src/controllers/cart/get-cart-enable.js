export default function makeGetCartEnable({ listCartEnable }) {
  return async function getCartEnable(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const cart = await listCartEnable({
        email: httpRequest.params.email,
      });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'List Cart Enable',
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
