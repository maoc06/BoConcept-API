export default function makeGetStore({ listStore }) {
  return async function getStore(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const store = await listStore({
        storeId: httpRequest.params.id,
      });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'List Store',
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
