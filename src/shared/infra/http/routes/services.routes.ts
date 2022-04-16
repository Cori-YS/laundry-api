import { CreateServicesController } from "@modules/clothes/useCases/createServices/CreateServicesController";
import { CreateServicesFabricsController } from "@modules/clothes/useCases/createServicesFabrics/CreateServicesFabricsController";
import { DeleteServiceController } from "@modules/clothes/useCases/deleteService/DeleteServiceController";
import { ListServicesController } from "@modules/clothes/useCases/listServices/ListServicesController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const servicesRoutes = Router();

const createServicesController = new CreateServicesController();
const listServicesController = new ListServicesController();
const deleteServiceController = new DeleteServiceController();
const createServicesFabricsController = new CreateServicesFabricsController();

servicesRoutes.post("/", ensureAuthenticated, createServicesController.handle);
servicesRoutes.get("/", listServicesController.handle);
servicesRoutes.post(
  "/fabrics/:service_id",
  createServicesFabricsController.handle
);
servicesRoutes.delete("/:service_id", deleteServiceController.handle);

export { servicesRoutes };
