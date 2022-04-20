import { CreateSizeController } from "@modules/clothes/useCases/createSize/CreateSizeController";
import { Router } from "express";

const sizesRoutes = Router();

const createSizeController = new CreateSizeController();

sizesRoutes.post("/", createSizeController.handle);

export { sizesRoutes };
