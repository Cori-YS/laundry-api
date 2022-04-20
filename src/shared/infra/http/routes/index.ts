import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { categoriesRoutes } from "./categories.routes";
import { clothesRoutes } from "./clothes.routes";
import { colorsRoutes } from "./colors.routes";
import { fabricsRoutes } from "./fabrics.routes";
import { servicesRoutes } from "./services.routes";
import { sizesRoutes } from "./sizes.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use(authenticateRoutes);
router.use("/services", servicesRoutes);
router.use("/categories", categoriesRoutes);
router.use("/fabrics", fabricsRoutes);
router.use("/colors", colorsRoutes);
router.use("/clothes", clothesRoutes);
router.use("/sizes", sizesRoutes);

export { router };
