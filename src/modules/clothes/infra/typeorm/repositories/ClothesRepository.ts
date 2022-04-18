import { ICreateClotheDTO } from "@modules/clothes/dtos/ICreateClotheDTO";
import { IClothesRepository } from "@modules/clothes/repositories/IClothesRepository";
import { getRepository, Repository } from "typeorm";
import { Clothe } from "../entities/Clothe";

class ClothesRepository implements IClothesRepository {
  private repository: Repository<Clothe>;

  constructor() {
    this.repository = getRepository(Clothe);
  }

  async create({
    id,
    name,
    user_id,
    description,
    color_id,
    fabric_id,
    category_id,
    size_id,
    iron,
    image,
  }: ICreateClotheDTO): Promise<Clothe> {
    const clothe = this.repository.create({
      id,
      name,
      user_id,
      description,
      color_id,
      fabric_id,
      category_id,
      size_id,
      iron,
      image,
    });

    await this.repository.save(clothe);

    return clothe;
  }

  async findByNameAndUserId(name: string, user_id: string): Promise<Clothe> {
    return await this.repository.findOne({ user_id, name });
  }

  async findById(id: string): Promise<Clothe> {
    return await this.repository.findOne({ id });
  }
}

export { ClothesRepository };
