import { getRepository, Repository } from "typeorm";
import { ICreateCategoryDTO } from "@modules/clothes/dtos/ICreateCategoryDTO";
import { ICategoriesRepository } from "@modules/clothes/repositories/ICategoriesRepository";
import { Category } from "../entities/Category";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;
  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
    const user = this.repository.create({
      name,
      description,
    });

    await this.repository.save(user);

    return user;
  }

  async findByName(name: string): Promise<Category> {
    return await this.repository.findOne({ name });
  }

  async list(): Promise<Category[]> {
    return await this.repository.find();
  }

  async delete(category_id: string): Promise<void> {
    await this.repository.delete(category_id);
  }

  async findById(category_id: any): Promise<Category> {
    return await this.repository.findOne(category_id);
  }
}

export { CategoriesRepository };
