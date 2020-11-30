export default function makePostProduct({ addProduct }) {
  return async function postProduct(httpRequest) {
    try {
      const { ...productInfo } = httpRequest.body;
      const product = await addProduct({ ...productInfo });

      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 201,
        body: {
          message: 'Product successfully added',
          data: product,
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
