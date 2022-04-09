import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateFabricsController } from "@modules/clothes/useCases/createFabrics/createFabricsController";


const fabricsRoutes = Router();

const createFabricsController = new CreateFabricsController();

fabricsRoutes.post("/", ensureAuthenticated, createFabricsController.handle);

export { fabricsRoutes };
