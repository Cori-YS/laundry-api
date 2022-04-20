import { ICreateClotheDTO } from "@modules/clothes/dtos/ICreateClotheDTO";
import { ICreateClotheUDTO } from "@modules/clothes/dtos/ICreateClotheUDTO";
import { Clothe } from "@modules/clothes/infra/typeorm/entities/Clothe";
import { ICategoriesRepository } from "@modules/clothes/repositories/ICategoriesRepository";
import { IClothesRepository } from "@modules/clothes/repositories/IClothesRepository";
import { IColorsRepository } from "@modules/clothes/repositories/IColorsRepository";
import { IFabricsRepository } from "@modules/clothes/repositories/IFabricsRepository";
import { ISizesRepository } from "@modules/clothes/repositories/ISizesRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateClotheUseCase {
  constructor(
    @inject("ClothesRepository")
    private clothesRepository: IClothesRepository,
    @inject("ColorsRepository")
    private colorsRepository: IColorsRepository,
    @inject("FabricsRepository")
    private fabricsRepository: IFabricsRepository,
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository,
    @inject("SizesRepository")
    private sizesRepository: ISizesRepository
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
  }: ICreateClotheUDTO): Promise<Clothe> {
    const clotheAlreadyExists =
      await this.clothesRepository.findByNameAndUserId(name, user_id);

    if (clotheAlreadyExists) {
      throw new AppError("This clothe already exists!");
    }

    const color = await this.colorsRepository.findById(color_id);
    const fabric = await this.fabricsRepository.findById(fabric_id);
    const category = await this.categoriesRepository.findById(category_id);
    const size = await this.sizesRepository.findById(size_id);

    if (!name || !color || !fabric || !category || !size) {
      throw new AppError(
        "To register a clothe is necessary a name, color, fabric, category and size"
      );
    }

    const clothe = await this.clothesRepository.create({
      name,
      user_id,
      description,
      color,
      fabric,
      category,
      size,
      iron,
    });

    return clothe;
  }
}

export { CreateClotheUseCase };
