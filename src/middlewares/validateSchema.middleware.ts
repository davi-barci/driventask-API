import { Schema, ValidationResult } from 'joi';
import { NextFunction, Request, Response } from 'express';
import * as errors from "@/errors/index.errors"

function validateSchema(schema: Schema, field = 'body') {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation: ValidationResult = schema.validate(req[field], { abortEarly: false });

    if (validation.error) {
      const errorsList: string[] = validation.error.details.map((detail) => detail.message);
      throw errors.unprocessableEntity(errorsList.join(', '));
    }

    next();
  };
}

export default validateSchema;
