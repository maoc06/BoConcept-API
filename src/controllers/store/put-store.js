export default function makePutStore({ updateStore }) {
  return async function putStore(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const { ...storeInfo } = httpRequest.body;
      const store = await updateStore({ ...storeInfo });
      return {
        headers,
        statusCode: 201,
        body: {
          message: 'Store successfully updated',
          data: store,
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
