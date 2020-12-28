export default function makePutShoppingProduct({ updateShoppingProduct }) {
  return async function putShoppingProduct(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const { ...shoppingProductInfo } = httpRequest.body;
      const shoppingProduct = await updateShoppingProduct({
        ...shoppingProductInfo,
      });
      return {
        headers,
        statusCode: 201,
        body: {
          message: 'Shopping product successfully updated',
          data: shoppingProduct,
        },
      };
    } catch (e) {
      console.log(e);
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
