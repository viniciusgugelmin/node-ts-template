import { Request, Response } from "express";
import { TestsService } from "../services/TestsService";
import { responseHandler } from "../application/handlers/responseHandler";

export class TestsController {
  private readonly testService: TestsService;

  constructor() {
    this.testService = new TestsService();
  }

  async handle(req: Request, res: Response) {
    const result = await this.testService.findAll();

    res.json(
      responseHandler({
        message: "Tests retrieved successfully",
        status: 200,
        data: result,
      })
    );
  }
}
