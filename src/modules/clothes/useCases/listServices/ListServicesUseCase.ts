import { Service } from "@modules/clothes/infra/typeorm/entities/Service";
import { IServicesRepository } from "@modules/clothes/repositories/IServicesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListServicesUseCase {
  constructor(
    @inject("ServicesRepository")
    private servicesRepository: IServicesRepository
  ) {}

  async execute(): Promise<Service[]> {
    return await this.servicesRepository.list();
  }
}

export { ListServicesUseCase };
