import { ToWash } from "@modules/to_wash/infra/typeorm/entities/ToWash";
import { ToWashRepository } from "@modules/to_wash/infra/typeorm/repositories/ToWashRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
  user_id: string;
  clothes_id: string;
  service_id: string;
  expected_return_date: Date;
}

@injectable()
class CreateToWashUseCase {
  constructor(
    @inject("ToWashRepository")
    private toWashRepository: ToWashRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider
  ) {}

  async execute({ 
    user_id,
    clothes_id,
    service_id,
    expected_return_date,
  }: IRequest): Promise<ToWash> {
    const minimumHour = 24;

    const towashOpenUser = await this.toWashRepository.findOpenToWashByUser(
      user_id
    );

    if (towashOpenUser) {
      throw new AppError("There's a rental in progress for user!");
    }

    const clothesUnavailable = await this.toWashRepository.findOpenToWashByClothes(
      clothes_id
    );

    if (clothesUnavailable) {
      throw new AppError(" Clothe is unavailable");
    }

    const towashOpenService = await this.toWashRepository.findOpenToWashByService(
      service_id
    );

    if (towashOpenService) {
      throw new AppError("There's a services in progress for clothes!");
    }

    const dateNow = this.dateProvider.dateNow();

    const compare = this.dateProvider.compareInHours(
      dateNow,
      expected_return_date
    );

    if (compare < minimumHour) {
      throw new AppError("Invalid return time!");
    }

    const towash = await this.toWashRepository.create({
      user_id,
      clothes_id,
      service_id,
      expected_return_date,
    })

    return towash;
  }
}

export { CreateToWashUseCase };