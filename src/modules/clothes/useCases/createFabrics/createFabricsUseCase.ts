import { Fabrics } from "@modules/clothes/infra/typeorm/entities/Fabrics";
import { IFabricsRepository } from "@modules/clothes/repositories/IFabricsRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateFabricsUseCase {
  constructor(
    @inject("FabricsRepository")
    private fabricsRepository: IFabricsRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<Fabrics> {
    const fabricsAlreadyExists = await this.fabricsRepository.findByName(
      name
    );

    if (fabricsAlreadyExists) {
      throw new AppError("Fabrics Already Exists!");
    }

    return await this.fabricsRepository.create({ name, description });
  }
}

export { CreateFabricsUseCase };
