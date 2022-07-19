import { Database } from "../application/database/Database";

export class TestsRepository {
  private readonly db: Database;

  constructor() {
    this.db = new Database();
  }

  async findAll(): Promise<string[]> {
    const connection = await this.db.connect();

    return connection.print(["Lorem Ipsum", "Dolor Sit Amet", "Consectetur Adipiscing Elit"]);
  }
}
