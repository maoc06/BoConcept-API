export default function makePostProductImage({ addProductImage }) {
  return async function postProductImage(httpRequest) {
    try {
      const { ...productImageInfo } = httpRequest.body;
      const productImage = await addProductImage({ ...productImageInfo });

      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 201,
        body: {
          message: 'Product image successfully added',
          data: productImage,
        },
      };
    } catch (e) {
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
}
