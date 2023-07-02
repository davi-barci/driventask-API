import httpStatus from 'http-status';
import { CustomError } from 'protocols/protocols';

export function unauthorized(message = "Unauthorized"): CustomError {
  const error: CustomError = {name: "UnauthorizedError", message, status: httpStatus.UNAUTHORIZED};
  return error;
}

export function notFound(message = "Not Found"): CustomError {
  const error: CustomError = {name: "NotFoundError", message, status: httpStatus.NOT_FOUND};
  return error;
}

export function conflict(message = "Conflict"): CustomError {
  const error: CustomError = {name: "ConflictError", message, status: httpStatus.CONFLICT};
  return error;
}

export function unprocessableEntity(message = "Unprocessable Entity"): CustomError {
  const error: CustomError = {name: "UnprocessableEntityError", message, status: httpStatus.UNPROCESSABLE_ENTITY};
  return error;
}


