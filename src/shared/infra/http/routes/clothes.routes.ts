import { CreateClotheController } from "@modules/clothes/useCases/createClothe/CreateClotheController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const clothesRoutes = Router();

const createClotheController = new CreateClotheController();

clothesRoutes.post("/", ensureAuthenticated, createClotheController.handle);

export { clothesRoutes };
