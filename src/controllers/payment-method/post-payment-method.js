export default function makePostPaymentMethod({ addPaymentMethod }) {
  return async function postPaymentMethod(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const { ...paymentMethodInfo } = httpRequest.body;
      const paymentMethod = await addPaymentMethod({ ...paymentMethodInfo });

      return {
        headers,
        statusCode: 201,
        body: {
          message: 'Payment method successfully added',
          data: paymentMethod,
        },
      };
    } catch (e) {
      console.log('POST PAY', e);
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
