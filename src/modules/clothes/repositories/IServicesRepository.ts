import { ICreateServicesDTO } from "../dtos/ICreateServicesDTO";
import { Services } from "../infra/typeorm/entities/Services";


interface IServicesRepository {
  create(data: ICreateServicesDTO): Promise<Services>;
  findByName(name: string): Promise<Services>;
}

export { IServicesRepository }
