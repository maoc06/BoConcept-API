import jwt from 'jsonwebtoken';
import { config } from '../../config';

export default function makeHandleToken() {
  return function handleToken({ userAuth }) {
    const info = {
      firstName: userAuth.getFirstName(),
      lastName: userAuth.getLastName(),
      email: userAuth.getEmail(),
      rol: userAuth.getRol(),
    };
    return jwt.sign({ info }, config.privateKey, {
      expiresIn: '10 days',
    });
  };
}
