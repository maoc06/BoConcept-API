export default function makeGetAddresByCustomer({ listAddressByCustomer }) {
  return async function getAddresByCustomer(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const address = await listAddressByCustomer({
        email: httpRequest.params.email,
      });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'List address by customer',
          data: address,
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
