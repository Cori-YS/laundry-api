import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { Category } from "../infra/typeorm/entities/Category";

interface ICategoriesRepository {
  create(data: ICreateCategoryDTO): Promise<Category>;
  findByName(name: string): Promise<Category>;
  findById(category_id: string): Promise<Category>;
  list(): Promise<Category[]>;
  delete(category_id: string): Promise<void>;
}

export { ICategoriesRepository };
