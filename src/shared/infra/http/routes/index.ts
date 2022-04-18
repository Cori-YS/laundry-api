import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { categoriesRoutes } from "./categories.routes";
import { colorsRouter } from "./colors.routes";
import { fabricsRoutes } from "./fabrics.routes";
import { servicesRoutes } from "./services.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use(authenticateRoutes);
router.use("/services", servicesRoutes);
router.use("/categories", categoriesRoutes);
router.use("/fabrics", fabricsRoutes);
router.use("/colors", colorsRouter);

export { router };
