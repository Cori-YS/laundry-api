import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateClotheController } from "@modules/clothes/useCases/createClothe/CreateClotheController";
import { UpdateClotheImageController } from "@modules/clothes/useCases/updateClotheImage/UpdateClotheImageController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const clothesRoutes = Router();

const uploadClotheImage = multer(uploadConfig.upload("./tmp/clothes"));

const createClotheController = new CreateClotheController();
const updateClotheImageController = new UpdateClotheImageController();

clothesRoutes.post("/", ensureAuthenticated, createClotheController.handle);

clothesRoutes.patch(
  "/:clothe_id",
  ensureAuthenticated,
  uploadClotheImage.single("clothe"),
  updateClotheImageController.handle
);

export { clothesRoutes };
