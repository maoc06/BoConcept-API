import jwt from 'jsonwebtoken';
import { config } from '../../config';

export default function makeHandleToken() {
  return function handleToken({ user }) {
    return jwt.sign({ user }, config.privateKey, {
      expiresIn: '10 days',
    });
  };
}
