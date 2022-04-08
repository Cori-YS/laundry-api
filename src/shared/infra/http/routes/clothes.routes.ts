import { CreateCategoryController } from "@modules/clothes/useCases/createCategory/CreateCategoryController";
import { DeleteCategoryController } from "@modules/clothes/useCases/deleteCategory/DeleteCategoryController";
import { ListCategoriesController } from "@modules/clothes/useCases/listCategories/ListCategoriesController";
import { Router } from "express";

const clothesRoutes = Router();

let createCategoryController = new CreateCategoryController();
let listCategoriesController = new ListCategoriesController();
let deleteCategoryController = new DeleteCategoryController();

clothesRoutes.post("/categories", createCategoryController.handle);

clothesRoutes.get("/categories", listCategoriesController.handle);

clothesRoutes.delete(
  "/categories/:category_id",
  deleteCategoryController.handle
);

export { clothesRoutes };
