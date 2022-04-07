import { ICategoriesRepository } from "@modules/clothes/repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute() {
    return await this.categoriesRepository.list();
  }
}

export { ListCategoriesUseCase };
