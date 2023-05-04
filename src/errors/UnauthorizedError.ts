import { AppError } from "./AppError";

class UnauthorizedError extends AppError {
  constructor(public readonly message: string = "Unauthorized") {
    super(message, 401);
  }
}

export { UnauthorizedError };
