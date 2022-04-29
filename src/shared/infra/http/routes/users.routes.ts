import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CloseAccountController } from "@modules/accounts/useCases/closeAccount/CloseAccountController";
import { UpdateUserAdminController } from "@modules/accounts/useCases/updateUserAdmin/UpdateUserAdminController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { UpdateUserEmployeeController } from "@modules/accounts/useCases/updateUserEmployee/UpdateUserEmployeeController";
import { UpdateUserController } from "@modules/accounts/useCases/updateUser/UpdateUserController";
import { UpdateUserActiveController } from "@modules/accounts/useCases/updateUserActive/UpdateUserActiveController";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
const closeAccountController = new CloseAccountController();
const updateUserAdminController = new UpdateUserAdminController();
const updateUserEmployeeController = new UpdateUserEmployeeController();
const updateUserActiveController = new UpdateUserActiveController();

// Create new User
usersRoutes.post("/", createUserController.handle);

// Update a new User
usersRoutes.put("/update", ensureAuthenticated, updateUserController.handle);

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

// Update user for Employee
usersRoutes.patch(
  "/user-Employee/:id",
  ensureAuthenticated,
  ensureAdmin,
  updateUserEmployeeController.handle
);

// Update user for Active
usersRoutes.patch(
  "/user-Active/:id",
  ensureAuthenticated,
  ensureAdmin,
  updateUserActiveController.handle
);

// Close/Delete Account/User
usersRoutes.delete(
  "/close-employee",
  ensureAuthenticated,
  closeAccountController.handle
);

export { usersRoutes };
