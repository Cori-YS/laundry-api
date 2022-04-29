import { IClothesRepository } from "@modules/clothes/repositories/IClothesRepository";
import { AppError } from "@shared/errors/AppError";
import { usersRoutes } from "@shared/infra/http/routes/users.routes";
import { deleteFile } from "@utils/file";
import { inject, injectable } from "tsyringe";

interface IRequest {
  clothe_id: string;
  image_file: string;
  user_id: string;
}

@injectable()
class UpdateClotheImageUseCase {
  constructor(
    @inject("ClothesRepository")
    private clothesRepository: IClothesRepository
  ) {}

  async execute({ clothe_id, image_file, user_id }: IRequest): Promise<void> {
    const clothe = await this.clothesRepository.findById(clothe_id);

    if (!clothe || clothe.user_id !== user_id) {
      throw new AppError("This clothe does not exists!", 404);
    }

    if (clothe.image) {
      await deleteFile(`./tmp/clothes/${clothe.image}`);
    }

    clothe.image = image_file;

    await this.clothesRepository.create(clothe);
  }
}

export { UpdateClotheImageUseCase };
