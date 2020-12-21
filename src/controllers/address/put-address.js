export default function makePutAddress({ updateAddress }) {
  return async function putAddress(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const { ...addressInfo } = httpRequest.body;
      const address = await updateAddress({
        ...addressInfo,
      });
      return {
        headers,
        statusCode: 201,
        body: {
          message: 'Address successfully updated',
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
