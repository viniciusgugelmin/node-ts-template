import { AppError } from "./../errors/AppError";
import { Request, Response, NextFunction } from "express";
import { logErrorHandler } from "./logErrorHandler";
import { responseHandler } from "./responseHandler";

export function errorHandler(error: AppError | Error, req: Request, res: Response, next: NextFunction) {
  if (error instanceof AppError) {
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
