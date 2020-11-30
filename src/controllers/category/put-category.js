export default function makePutCategory({ updateCategory }) {
  return async function putCategory(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const { ...categoryInfo } = httpRequest.body;
      const category = await updateCategory({ ...categoryInfo });
      return {
        headers,
        statusCode: 201,
        body: {
          message: 'Category successfully updated',
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
