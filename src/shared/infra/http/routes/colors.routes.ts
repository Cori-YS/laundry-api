import { CreateColorController } from "@modules/clothes/useCases/createColor/CreateColorController";
import { Router } from "express";

const colorsRouter = Router();

const createColorController = new CreateColorController();

colorsRouter.post("/", createColorController.handle);

export { colorsRouter };
