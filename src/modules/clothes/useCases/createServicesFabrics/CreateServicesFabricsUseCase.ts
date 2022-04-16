import { Service } from "@modules/clothes/infra/typeorm/entities/Service";
import { IFabricsRepository } from "@modules/clothes/repositories/IFabricsRepository";
import { IServicesRepository } from "@modules/clothes/repositories/IServicesRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
  service_id: string;
  fabrics_id: string[];
}
@injectable()
class CreateServicesFabricsUseCase {
  constructor(
    @inject("ServicesRepository")
    private servicesRepository: IServicesRepository,
    @inject("FabricsRepository")
    private fabricsRepository: IFabricsRepository
  ) {}

  async execute({ service_id, fabrics_id }: IRequest): Promise<Service> {
    const serviceExists = await this.servicesRepository.findById(service_id);

    if (!serviceExists) {
      throw new AppError("This service does not exists");
    }

    const fabrics = await this.fabricsRepository.findByIds(fabrics_id);

    serviceExists.fabrics = fabrics;

    await this.servicesRepository.create(serviceExists);

    return serviceExists;
  }
}

export { CreateServicesFabricsUseCase };
