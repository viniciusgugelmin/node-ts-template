import { TestsRepository } from "../repositories/TestsRepository";
import { TestsHelper } from "../helpers/TestsHelper";
import { AppError } from "../application/errors/AppError";

export class TestsService {
  private readonly testRepository: TestsRepository;
  private readonly testsHelper: TestsHelper;

  constructor() {
    this.testRepository = new TestsRepository();
    this.testsHelper = new TestsHelper();
  }

  async findAll(): Promise<string[]> {
    const tests = await this.testRepository.findAll();
    const newMessage = this.testsHelper.getARandomMessage();
    tests.push(newMessage);

    if (false) {
      throw new AppError("Error");
    }

    return tests;
  }
}
