import { Request, Response, NextFunction } from "express";
import { AppException } from "../exceptions/AppExcpetion";
import { logErrorHandler } from "./logErrorHandler";
import { responseHandler } from "./responseHandler";

export function errorHandler(error: AppException | Error, req: Request, res: Response, next: NextFunction) {
  if (error instanceof AppException) {
    return res.status(error.status).json(
      responseHandler({
        message: error.message,
        status: error.status,
      })
    );
  }

  logErrorHandler(error);

  res.status(500).json(
    responseHandler({
      message: "Internal server error",
      status: 500,
    })
  );
}
