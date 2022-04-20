import { ICreateColorDTO } from "@modules/clothes/dtos/ICreateColorDTO";
import { IColorsRepository } from "@modules/clothes/repositories/IColorsRepository";
import { getRepository, Repository } from "typeorm";
import { Color } from "../entities/Color";

class ColorsRepository implements IColorsRepository {
  private repository: Repository<Color>;

  constructor() {
    this.repository = getRepository(Color);
  }

  async create({ name }: ICreateColorDTO): Promise<Color> {
    const color = this.repository.create({ name });

    await this.repository.save(color);

    return color;
  }

  async findByName(name: string): Promise<Color> {
    return await this.repository.findOne({ name });
  }

  async findById(color_id: string): Promise<Color> {
    return await this.repository.findOne({ id: color_id });
  }
}

export { ColorsRepository };
