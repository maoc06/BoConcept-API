export default function makeGetCustomer({ listCustomer }) {
  return async function getCustomer(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const customer = await listCustomer({ email: httpRequest.params.email });

      return {
        headers,
        statusCode: 200,
        body: {
          message: 'Retrieve Customer',
          data: customer,
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
