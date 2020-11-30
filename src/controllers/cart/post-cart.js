export default function makePostCart({ addCart }) {
  return async function postCart(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const { ...cartInfo } = httpRequest.body;
      const cart = await addCart({
        ...cartInfo,
      });

      return {
        headers,
        statusCode: 201,
        body: {
          message: 'Cart successfully added',
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
