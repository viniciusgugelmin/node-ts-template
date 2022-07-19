import { Router } from "express";
import { testRouter } from "./test.routes";

const router = Router();

router.use("/tests", testRouter);

export { router };
