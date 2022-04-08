import { CreateCategoryController } from "@modules/clothes/useCases/createCategory/CreateCategoryController";
import { DeleteCategoryController } from "@modules/clothes/useCases/deleteCategory/DeleteCategoryController";
import { ListCategoriesController } from "@modules/clothes/useCases/listCategories/ListCategoriesController";
import { Router } from "express";

const clothesRoutes = Router();

export { clothesRoutes };
