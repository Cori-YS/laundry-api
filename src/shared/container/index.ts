import { container } from "tsyringe";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { ICategoriesRepository } from "@modules/clothes/repositories/ICategoriesRepository";
import { CategoriesRepository } from "@modules/clothes/infra/typeorm/repositories/CategoriesRepository";
import { ServicesRepository } from "@modules/clothes/infra/typeorm/repositories/ServicesRepository";
import { IServicesRepository } from "@modules/clothes/repositories/IServicesRepository";
import { IFabricsRepository } from "@modules/clothes/repositories/IFabricsRepository";
import { FabricsRepository } from "@modules/clothes/infra/typeorm/repositories/FabricsRepository";
import { IColorsRepository } from "@modules/clothes/repositories/IColorsRepository";
import { ColorsRepository } from "@modules/clothes/infra/typeorm/repositories/ColorsRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<IServicesRepository>(
  "ServicesRepository",
  ServicesRepository
);

container.registerSingleton<IFabricsRepository>(
  "FabricsRepository",
  FabricsRepository
);

container.registerSingleton<IColorsRepository>(
  "ColorsRepository",
  ColorsRepository
);
