import { CreateCategoryController } from "@modules/clothes/useCases/createCategory/CreateCategoryController";
import { DeleteCategoryController } from "@modules/clothes/useCases/deleteCategory/DeleteCategoryController";
import { ListCategoriesController } from "@modules/clothes/useCases/listCategories/ListCategoriesController";
import { Router } from "express";

const categoriesRoutes = Router();

let createCategoryController = new CreateCategoryController();
let listCategoriesController = new ListCategoriesController();
let deleteCategoryController = new DeleteCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.delete("/:category_id", deleteCategoryController.handle);

export { categoriesRoutes };
