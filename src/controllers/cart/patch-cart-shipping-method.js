export default function makePatchCartShippingMethod({
  updateCartShippingMethod,
}) {
  return async function patchCartShippingMethod(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const { cartId, shippingMethodId } = httpRequest.body;
      const cart = await updateCartShippingMethod({
        cartId,
        shippingMethodId,
      });
      return {
        headers,
        statusCode: 201,
        body: {
          message: 'The cart shipping method was successfully updated',
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
