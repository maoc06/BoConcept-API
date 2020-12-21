export default function makeDeleteShippingMethod({ removeShippingMethod }) {
  return async function deleteShippingMethod(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      await removeShippingMethod({
        shippingMethodId: httpRequest.params.shippingMethodId,
      });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'Shipping method successfully deleted',
          data: {},
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
