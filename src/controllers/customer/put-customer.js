export default function makePutCustomer({ updateCustomer }) {
  return async function putCustomer(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const { ...customerInfo } = httpRequest.body;
      const customer = await updateCustomer({ ...customerInfo });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'Customer successfully updated',
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
