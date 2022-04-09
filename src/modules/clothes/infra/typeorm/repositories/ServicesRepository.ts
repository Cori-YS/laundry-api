import { ICreateServicesDTO } from "@modules/clothes/dtos/ICreateServicesDTO";
import { IServicesRepository } from "@modules/clothes/repositories/IServicesRepository";
import { getRepository, Repository } from "typeorm";
import { Service } from "../entities/Service";

class ServicesRepository implements IServicesRepository {
  private repository: Repository<Service>;

  constructor() {
    this.repository = getRepository(Service);
  }

  async create({
    name,
    description,
    price,
  }: ICreateServicesDTO): Promise<Service> {
    const services = this.repository.create({
      name,
      description,
      price,
    });

    await this.repository.save(services);

    return services;
  }

  async findByName(name: string): Promise<Service> {
    return await this.repository.findOne({ name });
  }

  async list(): Promise<Service[]> {
    return this.repository.find();
  }

  async findById(service_id: string): Promise<Service> {
    return await this.repository.findOne(service_id);
  }

  async delete(service_id: string): Promise<void> {
    await this.repository.delete(service_id);
  }
}

export { ServicesRepository };
