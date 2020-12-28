export default function makeGenerateOrder({ processOrder }) {
  return async function generateOrder(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const { ...cartInfo } = httpRequest.body;

      const order = await processOrder({
        ...cartInfo,
      });
      return {
        headers,
        statusCode: 201,
        body: {
          message: 'Order successfully generate',
          data: order,
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
