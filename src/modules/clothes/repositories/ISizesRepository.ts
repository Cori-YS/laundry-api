import { Size } from "../infra/typeorm/entities/Size";

interface ISizesRepository {
  create(name: string): Promise<Size>;
  findById(id: string): Promise<Size>;
  findByName(name: string): Promise<Size>;
}

export { ISizesRepository };
