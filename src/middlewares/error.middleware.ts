import { NextFunction, Response, Request } from "express";
import httpStatus from "http-status";

type ErrorStatusCodes = {
  [key: string]: number;
}

type PostgresErrorCodes = {
  [key: number]: number;
}

const errorStatusCodes: ErrorStatusCodes = {
  UnauthorizedError: httpStatus.UNAUTHORIZED,
  NotFoundError: httpStatus.NOT_FOUND,
  ConflictError: httpStatus.CONFLICT,
  UnprocessableEntityError: httpStatus.UNPROCESSABLE_ENTITY,
};

const postgresErrorCodes: PostgresErrorCodes = {
  23505: httpStatus.CONFLICT,
};

function errorMiddleware(err: any, _req: Request, res: Response, _next: NextFunction) {
  const response = err.message || "Internal Server Error";
  let statusCode =
    errorStatusCodes[err.name] ||
    postgresErrorCodes[err.code] ||
    httpStatus.INTERNAL_SERVER_ERROR;

  if (postgresErrorCodes.hasOwnProperty(err.code)) {
    return res.sendStatus(statusCode);
  } else {
    return res.status(statusCode).send(response);
  }
}

export default errorMiddleware;
