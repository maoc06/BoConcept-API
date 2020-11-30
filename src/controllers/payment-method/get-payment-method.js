export default function makeGetPaymentMethod({ listPaymentMethod }) {
  return async function getPaymentMethod(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const paymentMethod = await listPaymentMethod({
        payId: httpRequest.params.id,
      });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'List Payment Method',
          data: paymentMethod,
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
