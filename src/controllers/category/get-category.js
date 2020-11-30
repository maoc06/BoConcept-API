export default function makeGetCategory({ listCategory }) {
  return async function getCategory(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const category = await listCategory({
        catId: httpRequest.params.id,
      });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'List Category',
          data: category,
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
