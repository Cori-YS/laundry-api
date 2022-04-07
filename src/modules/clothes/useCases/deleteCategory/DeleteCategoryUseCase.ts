import { ICategoriesRepository } from "@modules/clothes/repositories/ICategoriesRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(category_id: string): Promise<void> {
    const category = await this.categoriesRepository.findById(category_id);

    if (!category) {
      throw new AppError("This category does not exists");
    }

    await this.categoriesRepository.delete(category_id);
  }
}

export { DeleteCategoryUseCase };
