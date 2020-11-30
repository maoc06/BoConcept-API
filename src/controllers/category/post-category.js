export default function makePostCategory({ addCategory }) {
  return async function postCategory(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const { ...categoryInfo } = httpRequest.body;
      const category = await addCategory({ ...categoryInfo });

      return {
        headers,
        statusCode: 201,
        body: {
          message: 'Category successfully added',
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
