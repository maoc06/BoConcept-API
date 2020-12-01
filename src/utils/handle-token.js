import jwt from 'jsonwebtoken';
import { config } from '../../config';

export default function makeHandleToken() {
  return function handleToken({ userAuth }) {
    const info = {
      email: userAuth.getEmail(),
      password: userAuth.getPassword(),
      rol: userAuth.getRol(),
    };
    return jwt.sign({ info }, config.privateKey, {
      expiresIn: '10 days',
    });
  };
}
