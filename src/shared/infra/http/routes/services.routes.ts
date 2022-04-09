import { CreateServicesController } from "@modules/clothes/useCases/createServices/CreateServicesController";
import { DeleteServiceController } from "@modules/clothes/useCases/deleteService/DeleteServiceController";
import { ListServicesController } from "@modules/clothes/useCases/listServices/ListServicesController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const servicesRoutes = Router();

const createServicesController = new CreateServicesController();
const listServicesController = new ListServicesController();
const deleteServiceController = new DeleteServiceController();

servicesRoutes.post("/", ensureAuthenticated, createServicesController.handle);
servicesRoutes.get("/", listServicesController.handle);
servicesRoutes.delete("/:service_id", deleteServiceController.handle);

export { servicesRoutes };
