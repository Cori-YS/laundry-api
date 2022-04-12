import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CloseAccountController } from "@modules/accounts/useCases/closeAccount/CloseAccountController";
import { UpdateUserAdminController } from "@modules/accounts/useCases/updateUserAdmin/UpdateUserAdminController";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
const closeAccountController = new CloseAccountController();
const updateUserAdminController = new UpdateUserAdminController();

// Create new User
usersRoutes.post("/", createUserController.handle);

// Create a new avatar
usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

// Update user for Admin
usersRoutes.patch(
  "/user-admin/:id",
  ensureAuthenticated,
  ensureAdmin,
  updateUserAdminController.handle
);

// Close/Delete Account/User
usersRoutes.delete(
  "/close-account",
  ensureAuthenticated,
  closeAccountController.handle
);

export { usersRoutes };
