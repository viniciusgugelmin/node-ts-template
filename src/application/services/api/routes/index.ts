import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("NODE-TS-TEMPLATE API");
});

export { routes };
