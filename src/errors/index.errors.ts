import httpStatus from 'http-status';

export type CustomError = {
  name: string;
  message: string;
  status?: number;
}

export function unauthorized(message = "Unauthorized"): CustomError {
  const error: CustomError = {name: "UnauthorizedError", message, status: httpStatus.UNAUTHORIZED};
  return error;
}

export function notFound(message = "Not Found"): CustomError {
  const error: CustomError = {name: "NotFound", message, status: httpStatus.NOT_FOUND};
  return error;
}

export function conflict(message = "Conflict"): CustomError {
  const error: CustomError = {name: "ConflictError", message, status: httpStatus.CONFLICT};
  return error;
}

export function unprocessableEntity(message = "Unprocessable Entity"): CustomError {
  const error: CustomError = {name: "UnprocessableEntity", message, status: httpStatus.UNPROCESSABLE_ENTITY};
  return error;
}


