export default function makeGetAddress({ listAddress }) {
  return async function getAddress(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const address = await listAddress({
        addressId: httpRequest.params.id,
      });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'List address',
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
