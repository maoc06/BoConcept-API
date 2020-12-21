export default function makeGetCreditCardByCustomer({
  listCreditCardByCustomer,
}) {
  return async function getCreditCardByCustomer(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const CreditCard = await listCreditCardByCustomer({
        email: httpRequest.params.email,
      });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'List Credit Card by customer',
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
