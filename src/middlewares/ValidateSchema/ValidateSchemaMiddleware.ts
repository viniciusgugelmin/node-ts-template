import { NextFunction, Request, Response } from "express";
import { responseHandler } from "../../application/services/api/handlers";
import { ValidateSchemaMiddlewareDTO } from "./ValidateSchemaMiddlewareDTO";
import { AppError } from "../../errors/AppError";

class ValidateSchemaMiddleware
  implements ValidateSchemaMiddlewareDTO.IValidateSchemaMiddleware
{
  public handle({
    schema,
    type
  }: ValidateSchemaMiddlewareDTO.HandleDTO): ValidateSchemaMiddlewareDTO.HandleResponseDTO {
    return (req: Request, res: Response, next: NextFunction) => {
      const { error } = schema.validate(req[type], {
        abortEarly: false
      });

      if (!error) {
        next();
        return;
      }

      const errors = error.details.map((err) => {
        return {
          label: err.context?.label,
          message: err.message
        };
      });

      const _error = new AppError("Validation failed");

      return res.status(_error.statusCode).json(
        responseHandler({
          ..._error,
          data: errors
        })
      );
    };
  }
}

export { ValidateSchemaMiddleware };
