export default function makePatchCartBillingAddress({
  updateCartBillingAddress,
}) {
  return async function patchCartBillingAddress(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const { cartId, addressId } = httpRequest.body;
      const cart = await updateCartBillingAddress({
        cartId,
        addressId,
      });
      return {
        headers,
        statusCode: 201,
        body: {
          message: 'The cart address was successfully updated',
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
