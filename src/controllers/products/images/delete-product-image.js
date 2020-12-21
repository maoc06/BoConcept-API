export default function makeDeleteProductImage({ removeProductImage }) {
  return async function deleteProductImage(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      await removeProductImage({ productImageId: httpRequest.params.id });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'Product image successfully deleted',
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
