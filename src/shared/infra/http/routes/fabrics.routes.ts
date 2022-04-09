import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateFabricsController } from "@modules/clothes/useCases/createFabrics/createFabricsController";
import { ListFabricsController } from "@modules/clothes/useCases/listFabrics/ListFabricsController";
import { DeleteFabricController } from "@modules/clothes/useCases/deleteFabric/DeleteFabricController";

const fabricsRoutes = Router();

const createFabricsController = new CreateFabricsController();
const listFabricsController = new ListFabricsController();
const deleteFabricController = new DeleteFabricController();

fabricsRoutes.post("/", createFabricsController.handle);
fabricsRoutes.get("/", listFabricsController.handle);
fabricsRoutes.delete("/:fabric_id", deleteFabricController.handle);

export { fabricsRoutes };
