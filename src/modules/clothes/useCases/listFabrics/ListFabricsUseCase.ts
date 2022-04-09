import { Fabrics } from "@modules/clothes/infra/typeorm/entities/Fabrics";
import { IFabricsRepository } from "@modules/clothes/repositories/IFabricsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListFabricsUseCase {
  constructor(
    @inject("FabricsRepository")
    private fabricsRepository: IFabricsRepository
  ) {}

  async execute(): Promise<Fabrics[]> {
    return await this.fabricsRepository.list();
  }
}

export { ListFabricsUseCase };
