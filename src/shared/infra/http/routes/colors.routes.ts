import { CreateColorController } from "@modules/clothes/useCases/createColor/CreateColorController";
import { Router } from "express";

const colorsRoutes = Router();

const createColorController = new CreateColorController();

colorsRoutes.post("/", createColorController.handle);

export { colorsRoutes };
