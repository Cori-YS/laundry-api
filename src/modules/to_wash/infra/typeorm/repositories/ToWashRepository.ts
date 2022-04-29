import { ICreateToWashDTO } from "@modules/to_wash/dtos/ICreateToWashDTO";
import { IToWashRepository } from "@modules/to_wash/repositories/IToWashRepository";
import { getRepository, Repository } from "typeorm";
import { ToWash } from "../entities/ToWash";


class ToWashRepository implements IToWashRepository {
  private repository: Repository<ToWash>;

  constructor() {
    this.repository = getRepository(ToWash);
  }
  async findOpenToWashByUser(user_id: string): Promise<ToWash> {
    const openByUser = await this.repository.findOne({user_id});
    return openByUser;
  }
  async findOpenToWashByClothes(clothes_id: string): Promise<ToWash> {
    const openByClothes = await this.repository.findOne({clothes_id});
    return openByClothes;
  }
  async findOpenToWashByService(service_id: string): Promise<ToWash> {
    const openByService = await this.repository.findOne({service_id})
    return openByService;
  }
  async create({ 
    user_id,
    clothes_id,
    service_id,
    expected_return_date,
  }: ICreateToWashDTO): Promise<ToWash> {
    const towash = this.repository.create({
      user_id,
      clothes_id,
      service_id,
      expected_return_date,
    });

    await this.repository.save(towash);

    return towash;
  }
}

export {ToWashRepository };