import { ICreateClotheDTO } from "../dtos/ICreateClotheDTO";
import { Clothe } from "../infra/typeorm/entities/Clothe";

interface IClothesRepository {
  create(data: ICreateClotheDTO): Promise<Clothe>;
  findByNameAndUserId(name: string, user_id: string): Promise<Clothe>;
  findById(id: string): Promise<Clothe>;
}

export { IClothesRepository };
