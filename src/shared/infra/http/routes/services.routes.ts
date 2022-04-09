import { CreateServicesController } from "@modules/clothes/useCases/createServices/CreateServicesController";
import { ListServicesController } from "@modules/clothes/useCases/listServices/ListServicesController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const servicesRoutes = Router();

const createServicesController = new CreateServicesController();
const listServicesController = new ListServicesController();

servicesRoutes.post("/", ensureAuthenticated, createServicesController.handle);
servicesRoutes.get("/", listServicesController.handle);

export { servicesRoutes };
