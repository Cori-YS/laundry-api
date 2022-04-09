import { IServicesRepository } from "@modules/clothes/repositories/IServicesRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteServiceUseCase {
  constructor(
    @inject("ServicesRepository")
    private servicesRepository: IServicesRepository
  ) {}

  async handle(service_id: string): Promise<void> {
    const serviceExists = await this.servicesRepository.findById(service_id);

    if (!serviceExists) {
      throw new AppError("This service does not exists!");
    }

    await this.servicesRepository.delete(service_id);
  }
}

export { DeleteServiceUseCase };
