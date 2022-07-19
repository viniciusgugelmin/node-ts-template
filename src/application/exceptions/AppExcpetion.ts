export class AppException {
  readonly message: string;
  readonly status: number;

  constructor(message: string, status: number = 400) {
    this.message = message;
    this.status = status;
  }
}
