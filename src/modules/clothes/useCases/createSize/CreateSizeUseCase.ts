import { Size } from "@modules/clothes/infra/typeorm/entities/Size";
import { ISizesRepository } from "@modules/clothes/repositories/ISizesRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateSizeUseCase {
  constructor(
    @inject("SizesRepository")
    private sizesRepository: ISizesRepository
  ) {}

  async execute(name: string): Promise<Size> {
    const sizeAlreadyExist = await this.sizesRepository.findByName(name);

    if (sizeAlreadyExist) {
      throw new AppError("This size already exists!");
    }

    const size = await this.sizesRepository.create(name);

    return size;
  }
}

export { CreateSizeUseCase };
