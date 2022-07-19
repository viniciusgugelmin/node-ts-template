import express from "express";
import "express-async-errors";
import cors from "cors";
import { errorHandler } from "./handlers/errorHandler";
import { router } from "./routes/routes";
import "./config/setup";

export class Server {
  readonly app: express.Application = express();
  readonly port = parseInt(process.env.PORT) || 5000;
  readonly domain = process.env.DOMAIN || `http://localhost:${this.port}`;

  constructor() {
    this.useConfig();
    this.useRoutes();
    this.useHandlers();
  }

  useConfig() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  useRoutes() {
    this.app.use("/api", router);
    this.app.use(errorHandler);
  }

  useHandlers() {}

  init() {
    this.app.listen(this.port, () => {
      console.log(`Server running on ${this.domain}`);
    });
  }
}
