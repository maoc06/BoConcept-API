import bcrypt from 'bcryptjs';
import { makeUserCredentials, makeCustomer } from '../../models';

export default function makeAuthCredentials({ customerDb, handleToken }) {
  return async function authCredentials(credentials) {
    const user = makeUserCredentials(credentials);

    // Verificar que el customer exista
    const existing = await customerDb.findById(user.getEmail());
    if (!existing) {
      throw new Error('auth/user-not-found');
    }

    // Validamos la password
    const validPassword = await bcrypt.compare(
      user.getPassword(),
      existing.password
    );
    if (!validPassword) {
      throw new Error('auth/invalid-password');
    }

    // SI las validaciones van bien -> generar el token y retornarlo
    const userAuth = makeCustomer(existing);
    const accessToken = handleToken({ userAuth });
    return accessToken;
  };
}
