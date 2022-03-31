import { Router } from "express";

import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();

// Create new User
usersRoutes.post("/", createUserController.handle);

export { usersRoutes };
