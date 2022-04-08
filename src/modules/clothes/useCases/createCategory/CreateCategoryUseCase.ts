import { ICreateCategoryDTO } from "@modules/clothes/dtos/ICreateCategoryDTO";
import { Category } from "@modules/clothes/infra/typeorm/entities/Category";
import { ICategoriesRepository } from "@modules/clothes/repositories/ICategoriesRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}
  async execute({ name, description }: ICreateCategoryDTO): Promise<Category> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new AppError("This category already exists!");
    }

    return await this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
