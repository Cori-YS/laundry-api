import { ICreateColorDTO } from "../dtos/ICreateColorDTO";
import { Color } from "../infra/typeorm/entities/Color";

interface IColorsRepository {
  create({ name }: ICreateColorDTO): Promise<Color>;
  findByName(name: string): Promise<Color>;
  findById(color_id: string): Promise<Color>;
}

export { IColorsRepository };
