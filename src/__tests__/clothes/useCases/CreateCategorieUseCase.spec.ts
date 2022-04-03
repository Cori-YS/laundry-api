import { Connection, createConnection } from "typeorm";

import { CategoriesRepository } from "@modules/clothes/infra/typeorm/repositories/CategoriesRepository";
import { CreateCategoryUseCase } from "@modules/clothes/useCases/createCategory/CreateCategoryUseCase";
import { AppError } from "@shared/errors/AppError";

let connection: Connection;
let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepository: CategoriesRepository;

describe("Create a category", () => {
  beforeEach(async () => {
    connection = await createConnection();

    categoriesRepository = new CategoriesRepository();
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
  });

  afterEach(async () => {
    await connection.close();
  });

  it("should be able to create a new category", async () => {
    const category = await createCategoryUseCase.execute({
      name: "Casaco",
      description: "Roupa pesada, usada durante periodos frios",
    });

    expect(category).toHaveProperty("id");
  });

  it("should not be able to create a new category whith the same name", async () => {
    expect(async () => {
      await createCategoryUseCase.execute({
        name: "Casaco",
        description: "Roupa pesada, usada durante periodos frios",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
