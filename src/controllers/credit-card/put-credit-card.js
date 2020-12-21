export default function makePutCreditCard({ updateCreditCard }) {
  return async function putCreditCard(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const { ...creditCardInfo } = httpRequest.body;
      const creditCard = await updateCreditCard({ ...creditCardInfo });
      return {
        headers,
        statusCode: 201,
        body: {
          message: 'Credit card successfully updated',
          data: creditCard,
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
