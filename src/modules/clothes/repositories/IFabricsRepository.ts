import { ICreateFabricsDTO } from "../dtos/ICreateFabricsDTO";
import { Fabrics } from "../infra/typeorm/entities/Fabrics";

interface IFabricsRepository {
  create(data: ICreateFabricsDTO): Promise<Fabrics>;
  findByName(name: string): Promise<Fabrics>;
  list(): Promise<Fabrics[]>;
  delete(fabric_id: string): Promise<void>;
}

export { IFabricsRepository };
