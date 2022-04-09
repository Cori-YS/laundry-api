import { ICreateServicesDTO } from "../dtos/ICreateServicesDTO";
import { Service } from "../infra/typeorm/entities/Service";

interface IServicesRepository {
  create(data: ICreateServicesDTO): Promise<Service>;
  findByName(name: string): Promise<Service>;
  list(): Promise<Service[]>;
  findById(service_id: string): Promise<Service>;
  delete(service_id: string): Promise<void>;
}

export { IServicesRepository };
