export default function makeSignUp({ addCustomer }) {
  return async function signUp(httpRequest) {
    try {
      const { ...customerInfo } = httpRequest.body;
      const customer = await addCustomer({ ...customerInfo });
      delete customer.password;
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 201,
        body: {
          message: 'Customer successfully register',
          data: customer,
        },
      };
    } catch (e) {
      console.log(e);
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
