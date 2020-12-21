export default function makePostShippingMethod({ addShippingMethod }) {
  return async function postShippingMethod(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const { ...shippingMethodInfo } = httpRequest.body;
      const shippingMethod = await addShippingMethod({
        ...shippingMethodInfo,
      });

      return {
        headers,
        statusCode: 201,
        body: {
          message: 'Shipping method successfully added',
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
