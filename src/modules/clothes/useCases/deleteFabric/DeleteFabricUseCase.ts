import { IFabricsRepository } from "@modules/clothes/repositories/IFabricsRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteFabricsUseCase {
  constructor(
    @inject("FabricsRepository")
    private fabricsRepository: IFabricsRepository
  ) {}

  async execute(fabric_id: string): Promise<void> {
    const fabricExists = await this.fabricsRepository.findById(fabric_id);

    if (!fabricExists) {
      throw new AppError("This fabric does not exists");
    }

    await this.fabricsRepository.delete(fabric_id);
  }
}

export { DeleteFabricsUseCase };
