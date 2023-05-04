import pkg from "@prisma/client";

namespace DatabaseDTO {
  export interface IDatabase {
    db: pkg.PrismaClient;

    disconnect(): DisconnectResponseDTO;
  }

  export type DisconnectResponseDTO = Promise<void>;
}

export { DatabaseDTO };
