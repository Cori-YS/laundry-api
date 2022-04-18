import { ICreateClotheDTO } from "@modules/clothes/dtos/ICreateClotheDTO";
import { Clothe } from "@modules/clothes/infra/typeorm/entities/Clothe";
import { IClothesRepository } from "@modules/clothes/repositories/IClothesRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateClotheUseCase {
  constructor(
    @inject("ClothesRepository")
    private clothesRepository: IClothesRepository
  ) {}

  async execute({
    name,
    user_id,
    description,
    color_id,
    fabric_id,
    category_id,
    size_id,
    iron,
  }: ICreateClotheDTO): Promise<Clothe> {
    const clotheAlreadyExists =
      await this.clothesRepository.findByNameAndUserId(name, user_id);

    console.log(clotheAlreadyExists);
    if (clotheAlreadyExists) {
      throw new AppError("Clothe already exists!");
    }

    const clothe = await this.clothesRepository.create({
      name,
      user_id,
      description,
      color_id,
      fabric_id,
      category_id,
      size_id,
      iron,
    });

    return clothe;
  }
}

export { CreateClotheUseCase };
