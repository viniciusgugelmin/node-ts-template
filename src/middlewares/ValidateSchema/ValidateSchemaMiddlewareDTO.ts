import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

namespace ValidateSchemaMiddlewareDTO {
  export interface IValidateSchemaMiddleware {
    handle(data: HandleDTO): HandleResponseDTO;
  }

  export type HandleDTO = {
    schema: ObjectSchema;
    type: "body" | "params" | "query";
  };

  export type HandleResponseDTO = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Response | void;
}

export { ValidateSchemaMiddlewareDTO };
