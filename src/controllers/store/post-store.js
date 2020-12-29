export default function makePostStore({ addStore }) {
  return async function postStore(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const { ...storeInfo } = httpRequest.body;
      const store = await addStore({ ...storeInfo });

      return {
        headers,
        statusCode: 201,
        body: {
          message: 'Store successfully added',
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
