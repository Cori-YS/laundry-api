import { ISizesRepository } from "@modules/clothes/repositories/ISizesRepository";
import { getRepository, Repository } from "typeorm";
import { Size } from "../entities/Size";

class SizesRepository implements ISizesRepository {
  private repository: Repository<Size>;
  constructor() {
    this.repository = getRepository(Size);
  }

  async create(name: string): Promise<Size> {
    const size = this.repository.create({ name });

    await this.repository.save(size);

    return size;
  }

  async findById(id: string): Promise<Size> {
    return await this.repository.findOne({ id });
  }

  async findByName(name: string): Promise<Size> {
    return await this.repository.findOne({ name });
  }
}

export { SizesRepository };
