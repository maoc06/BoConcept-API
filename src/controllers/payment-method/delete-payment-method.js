export default function makeDeletePaymentMethod({ removePaymentMethod }) {
  return async function deletePaymentMethod(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      await removePaymentMethod({ payId: httpRequest.params.id });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'Payment method successfully deleted',
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
