export default function makeDeleteShoppingProduct({ removeShoppingProduct }) {
  return async function deleteShoppingProduct(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      await removeShoppingProduct({ shprId: httpRequest.params.shprId });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'Shopping product successfully deleted',
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
