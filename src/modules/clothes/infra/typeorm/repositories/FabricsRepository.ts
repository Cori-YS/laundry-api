import { ICreateFabricsDTO } from "@modules/clothes/dtos/ICreateFabricsDTO";
import { IFabricsRepository } from "@modules/clothes/repositories/IFabricsRepository";
import { getRepository, Repository } from "typeorm";
import { Fabrics } from "../entities/Fabrics";

class FabricsRepository implements IFabricsRepository {
  private repository: Repository<Fabrics>;
  constructor() {
    this.repository = getRepository(Fabrics);
  }

  async create({ name, description }: ICreateFabricsDTO): Promise<Fabrics> {
    const fabrics = this.repository.create({
      name,
      description,
    });

    await this.repository.save(fabrics);

    return fabrics;
  }

  async findByName(name: string): Promise<Fabrics> {
    return await this.repository.findOne({ name });
  }

  async findById(fabric_id: string): Promise<Fabrics> {
    return await this.repository.findOne(fabric_id);
  }

  async list(): Promise<Fabrics[]> {
    return await this.repository.find();
  }

  async delete(fabric_id: string): Promise<void> {
    await this.repository.delete(fabric_id);
  }
}
export { FabricsRepository };
