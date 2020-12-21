export default function makePutShippingMethod({ updateShippingMethod }) {
  return async function putShippingMethod(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const { ...shippingMethodInfo } = httpRequest.body;
      const shippingMethod = await updateShippingMethod({
        ...shippingMethodInfo,
      });
      return {
        headers,
        statusCode: 201,
        body: {
          message: 'Shipping method successfully updated',
          data: shippingMethod,
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
