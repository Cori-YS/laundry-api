import { CreateCategoryController } from "@modules/clothes/useCases/createCategory/CreateCategoryController";
import { ListCategoriesController } from "@modules/clothes/useCases/listCategories/ListCategoriesController";
import { Router } from "express";

const clothesRoutes = Router();

let createCategoryController = new CreateCategoryController();
let listCategoriesController = new ListCategoriesController();

clothesRoutes.post("/", createCategoryController.handle);

clothesRoutes.get("/categories", listCategoriesController.handle);

export { clothesRoutes };
