import { CreateServicesController } from "@modules/clothes/useCases/createServices/CreateServicesController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const servicesRoutes = Router();

const createServicesController = new CreateServicesController();

servicesRoutes.post("/", ensureAuthenticated, createServicesController.handle);

export { servicesRoutes };

