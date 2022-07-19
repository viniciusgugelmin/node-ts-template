import { TestsRepository } from "../repositories/TestsRepository";
import { TestsHelper } from "../helpers/TestsHelper";
import { AppException } from "../application/exceptions/AppExcpetion";

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
      throw new AppException("Error");
    }

    return tests;
  }
}
