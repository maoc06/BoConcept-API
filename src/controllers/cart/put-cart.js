export default function makePutCart({ updateCart }) {
  return async function putCart(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const { ...cartInfo } = httpRequest.body;

      const cart = await updateCart({
        ...cartInfo,
      });
      return {
        headers,
        statusCode: 201,
        body: {
          message: 'Cart successfully updated',
          data: cart,
        },
      };
    } catch (e) {
      console.log('Update cart', e);
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
