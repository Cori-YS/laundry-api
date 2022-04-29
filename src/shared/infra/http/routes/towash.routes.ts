import { CreateToWashController } from "@modules/to_wash/useCases/createToWash/CreateToWashController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const towashRoutes = Router();

const createToWashController = new CreateToWashController();

towashRoutes.post("/", ensureAuthenticated, createToWashController.handle);

export { towashRoutes };