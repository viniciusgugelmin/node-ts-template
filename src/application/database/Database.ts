import "../config/setup";

export class Database {
  private cached;
  private connectionParams;

  constructor() {
    this.cached = null;
    this.connectionParams = {
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT),
    };
  }

  async connect() {
    if (this.cached) return this.cached;

    if (process.env.DATABASE_URL) {
      this.connectionParams = {
        connectionString: process.env.DATABASE_URL,
      };
    }

    if (process.env.MODE === "PROD") {
      this.connectionParams.ssl = {
        rejectUnauthorized: false,
      };
    }

    const db = {
      connectionParams: this.connectionParams,
      connect: async () => {
        console.log("Connecting to DB...");
      },
      print: (el) => {
        console.log(el);
        return el;
      },
    };
    await db.connect();

    this.cached = db;

    return db;
  }
}
