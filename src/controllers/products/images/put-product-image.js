export default function makePutProductImage({ updateProductImage }) {
  return async function putProductImage(httpRequest) {
    try {
      const { ...productImageInfo } = httpRequest.body;
      const productImage = await updateProductImage({ ...productImageInfo });
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 201,
        body: {
          message: 'Product image successfully updated',
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
