import { Request, Response, NextFunction } from 'express';
import * as errors from '@/errors/index.errors';
import * as userRepository from '@/repositories/users.repository';

async function authValidation(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { authorization } = req.headers;
  const token = authorization?.replace('Bearer ', '');

  if (!token) {
    throw errors.unauthorized();
  }

  const queryResult = await userRepository.findUserByToken(token);

  if (!queryResult.rowCount) {
    throw errors.unauthorized();
  }

  const { id_user: userId } = queryResult.rows[0];
  res.locals.userId = userId;
  res.locals.token = token;

  next();
}

export default authValidation;
