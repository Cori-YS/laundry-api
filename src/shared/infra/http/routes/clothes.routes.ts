import { CreateCategoryController } from "@modules/clothes/useCases/createCategory/CreateCategoryController";
import { Router } from "express";

const clothesRoutes = Router();

let createCategoryController = new CreateCategoryController();

clothesRoutes.post("/", createCategoryController.handle);

export { clothesRoutes };
