import { ICreateFabricsDTO } from "../dtos/ICreateFabricsDTO";
import { Fabrics } from "../infra/typeorm/entities/Fabrics";

interface IFabricsRepository {
  create(data: ICreateFabricsDTO): Promise<Fabrics>;
  findByName(name: string) : Promise<Fabrics>
}

export { IFabricsRepository }
