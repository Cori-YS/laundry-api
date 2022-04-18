import { ICreateColorDTO } from "@modules/clothes/dtos/ICreateColorDTO";
import { Color } from "@modules/clothes/infra/typeorm/entities/Color";
import { IColorsRepository } from "@modules/clothes/repositories/IColorsRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateColorUseCase {
  constructor(
    @inject("ColorsRepository")
    private colorsRepository: IColorsRepository
  ) {}

  async execute({ name }: ICreateColorDTO): Promise<Color> {
    const colorAlreadyExists = await this.colorsRepository.findByName(name);

    if (colorAlreadyExists) {
      throw new AppError("Color already exists!");
    }

    return await this.colorsRepository.create({ name });
  }
}

export { CreateColorUseCase };
