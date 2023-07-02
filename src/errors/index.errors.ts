import httpStatus from 'http-status';

interface CustomError {
  name: string;
  message: string;
  status?: number;
}

export function errorFactory(name: string, message: string): CustomError {
  return { name, message };
}

export function unauthorized(message = "Unauthorized"): CustomError {
  const error: CustomError = errorFactory("UnauthorizedError", message);
  error.status = httpStatus.UNAUTHORIZED;
  return error;
}

export function notFound(message = "Not Found"): CustomError {
  const error: CustomError = errorFactory("NotFoundError", message);
  error.status = httpStatus.NOT_FOUND;
  return error;
}

export function conflict(message = "Conflict"): CustomError {
  const error: CustomError = errorFactory("ConflictError", message);
  error.status = httpStatus.CONFLICT;
  return error;
}

export function unprocessableEntity(message = "Unprocessable Entity"): CustomError {
  const error: CustomError = errorFactory("UnprocessableEntityError", message);
  error.status = httpStatus.UNPROCESSABLE_ENTITY;
  return error;
}


