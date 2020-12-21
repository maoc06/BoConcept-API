export default function makeGetShippingMethod({ listShippingMethod }) {
  return async function getShippingMethod(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const shippingMethods = await listShippingMethod({
        shippingMethodId: httpRequest.params.shippingMethodId,
      });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'List shipping methods',
          data: shippingMethods,
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
