export default function makeGetProductImage({ listProductImage }) {
  return async function getProductImage(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const productImages = await listProductImage({
        proId: httpRequest.params.proId,
      });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'list product images',
          data: productImages,
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
