import { Connection, createConnection } from "typeorm";

import { CategoriesRepository } from "@modules/clothes/infra/typeorm/repositories/CategoriesRepository";
import { CreateCategoryUseCase } from "@modules/clothes/useCases/createCategory/CreateCategoryUseCase";
import { AppError } from "@shared/errors/AppError";

describe("Create a category", () => {
  let connection: Connection;
  let createCategoryUseCase: CreateCategoryUseCase;
  let categoriesRepository: CategoriesRepository;

  beforeAll(async () => {
    connection = await createConnection();
    categoriesRepository = new CategoriesRepository();
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
  });

  afterAll(async () => {
    await connection.close();
    //console.log("aqui");
    //(await connection).close;
  });

  it("should be able to create a new category", async () => {
    const category = await createCategoryUseCase.execute({
      name: "Casacoss",
      description: "Roupa pesada, usada durante periodos frios",
    });

    expect(category).toHaveProperty("id");
  });

  it("should not be able to create a new category whith the same name", async () => {
    expect(async () => {
      await createCategoryUseCase.execute({
        name: "Casacoss",
        description: "Roupa pesada, usada durante periodos frios",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
