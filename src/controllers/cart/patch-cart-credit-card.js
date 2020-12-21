export default function makePatchCartCreditCard({ updateCartCreditCard }) {
  return async function patchCartCreditCard(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const { cartId, creditCardNumber } = httpRequest.body;
      const cart = await updateCartCreditCard({
        cartId,
        creditCardNumber,
      });
      return {
        headers,
        statusCode: 201,
        body: {
          message: 'The cart credit card was successfully updated',
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
