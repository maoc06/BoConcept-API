import jwt from 'jsonwebtoken';
import { config } from '../../../config';

/* eslint-disable consistent-return */
export default function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, config.privateKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
