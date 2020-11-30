export default function makeDeleteCustomer({ removeCustomer }) {
  return async function deleteCustomer(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      await removeCustomer({ email: httpRequest.params.email });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'Customer successfully deleted',
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
