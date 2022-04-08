import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { clothesRoutes } from "./clothes.routes";
import { servicesRoutes } from "./services.route";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use(authenticateRoutes);
router.use("/clothes", clothesRoutes);
router.use("/services", servicesRoutes);

export { router };
