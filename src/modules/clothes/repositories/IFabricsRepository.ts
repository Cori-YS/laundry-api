import { ICreateFabricsDTO } from "../dtos/ICreateFabricsDTO";
import { Fabrics } from "../infra/typeorm/entities/Fabrics";

interface IFabricsRepository {
  create(data: ICreateFabricsDTO): Promise<Fabrics>;
  findByName(name: string): Promise<Fabrics>;
  findById(fabric_id: string): Promise<Fabrics>;
  list(): Promise<Fabrics[]>;
  delete(fabric_id: string): Promise<void>;
  findByIds(fabrics_id: string[]): Promise<Fabrics[]>;
}

export { IFabricsRepository };
