export default function makeDeleteCreditCard({ removeCreditCard }) {
  return async function deleteCreditCard(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      await removeCreditCard({ creditCardNumber: httpRequest.params.id });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'Credit card successfully deleted',
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
