export default function makeSignIn({ authCredentials }) {
  return async function signIn(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const { ...credentials } = httpRequest.body;
      const auth = await authCredentials({ ...credentials });
      return {
        headers,
        statusCode: 200,
        body: {
          token: auth,
        },
      };
    } catch (e) {
      return {
        headers,
        statusCode: 403,
        body: {
          error: e.message,
        },
      };
    }
  };
}
