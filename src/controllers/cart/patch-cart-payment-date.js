export default function makePatchCartPaymentDate({ updateCartPaymentDate }) {
  return async function patchCartPaymentDate(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const { ...cartId } = httpRequest.body;
      const cart = await updateCartPaymentDate({
        ...cartId,
      });
      return {
        headers,
        statusCode: 201,
        body: {
          message: 'The cart payment date was successfully updated',
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
