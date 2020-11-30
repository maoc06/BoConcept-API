export default function makePutPaymentMethod({ updatePaymentMethod }) {
  return async function putPaymentMethod(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const { ...paymentMethodInfo } = httpRequest.body;
      const paymentMethod = await updatePaymentMethod({ ...paymentMethodInfo });
      return {
        headers,
        statusCode: 201,
        body: {
          message: 'Payment method successfully updated',
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
