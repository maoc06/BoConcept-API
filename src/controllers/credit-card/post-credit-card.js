export default function makePostCreditCard({ addCreditCard }) {
  return async function postCreditCard(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const { ...creditCardInfo } = httpRequest.body;
      const creditCard = await addCreditCard({ ...creditCardInfo });

      return {
        headers,
        statusCode: 201,
        body: {
          message: 'Credit card successfully added',
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
