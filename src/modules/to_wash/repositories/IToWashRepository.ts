import { ICreateToWashDTO } from "../dtos/ICreateToWashDTO";
import { ToWash } from "../infra/typeorm/entities/ToWash";



interface IToWashRepository {
  
  findOpenToWashByUser(user_id: string): Promise<ToWash>;
  findOpenToWashByClothes(clothes_id: string): Promise<ToWash>;
  findOpenToWashByService(service_id: string): Promise<ToWash>;

  create(data: ICreateToWashDTO): Promise<ToWash>;
}

export { IToWashRepository };