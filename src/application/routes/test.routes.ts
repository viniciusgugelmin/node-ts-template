import { Router } from "express";
import { TestsController } from "../../controllers/TestsController";

const testRouter = Router();
const testController = new TestsController();

testRouter.get("/", (req, res) => testController.handle(req, res));

export { testRouter };
