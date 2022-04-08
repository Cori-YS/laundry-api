import { ICreateServicesDTO } from "@modules/clothes/dtos/ICreateServicesDTO";
import { IServicesRepository } from "@modules/clothes/repositories/IServicesRepository";
import { getRepository, Repository } from "typeorm";
import { Services } from "../entities/Services";

class ServicesRepository implements IServicesRepository {
  private repository: Repository<Services>;

  constructor() {
    this.repository = getRepository(Services);
  }
  async create({ name, description, price }: ICreateServicesDTO): Promise<Services> {
    const services = this.repository.create({
       name, 
       description, 
       price 
    });

    await this.repository.save(services);

    return services;
  }
  async findByName(name: string): Promise<Services> {
     return await this.repository.findOne({ name });
  }
}

export { ServicesRepository };
