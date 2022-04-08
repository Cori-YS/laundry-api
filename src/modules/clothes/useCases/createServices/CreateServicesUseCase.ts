import { Services } from "@modules/clothes/infra/typeorm/entities/Services";
import { IServicesRepository } from "@modules/clothes/repositories/IServicesRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
  name: string;
  description: string;
  price: number;
}

@injectable()
class CreateServicesUseCase {
  constructor(
    @inject("ServicesRepository")
    private servicesRepository: IServicesRepository
  ) {}

  async execute({ name, description, price}: IRequest): Promise<Services> {
    const servicesAlreadyExists = await this.servicesRepository.findByName(name);

    if (servicesAlreadyExists) {
      throw new AppError("Services Already Exists!");
    }

    return await this.servicesRepository.create({ name, description, price });
  }
}

export { CreateServicesUseCase };
