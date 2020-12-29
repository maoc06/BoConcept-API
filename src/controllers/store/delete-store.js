export default function makeDeleteStore({ removeStore }) {
  return async function deleteStore(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      await removeStore({ storeId: httpRequest.params.id });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'Store successfully deleted',
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
