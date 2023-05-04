import pkg from "@prisma/client";
import { DatabaseDTO } from "./DatabaseDTO";

class Database implements DatabaseDTO.IDatabase {
  readonly db: pkg.PrismaClient;

  constructor() {
    const { PrismaClient } = pkg;
    this.db = new PrismaClient();
  }

  async disconnect(): DatabaseDTO.DisconnectResponseDTO {
    await this.db.$disconnect();
  }
}

export { Database };
