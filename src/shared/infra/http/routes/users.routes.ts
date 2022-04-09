import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CloseAccountController } from "@modules/accounts/useCases/closeAccount/CloseAccountController";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
const closeAccountController = new CloseAccountController();

// Create new User
usersRoutes.post("/", createUserController.handle);

// Create a new avatar
usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

// Close/Delete Account/User
usersRoutes.delete("/close-account", closeAccountController.handle);

export { usersRoutes };
