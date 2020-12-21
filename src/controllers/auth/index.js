import { authUseCases, customerUseCases } from '../../use-cases';

import makeSignIn from './signin';
import makeSignUp from './signup';

const { addCustomer } = customerUseCases;
const { authCredentials } = authUseCases;

const signUp = makeSignUp({ addCustomer });
const signIn = makeSignIn({ authCredentials });

export default {
  signUp,
  signIn,
};
