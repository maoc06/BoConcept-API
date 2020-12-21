export default function makeGetCreditCard({ listCreditCard }) {
  return async function getCreditCard(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const CreditCard = await listCreditCard({
        creditCardNumber: httpRequest.params.id,
      });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'List Credit Card',
          data: CreditCard,
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
