import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateClotheImageUseCase } from "./UpdateClotheImageUseCase";

class UpdateClotheImageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const image_file = request.file.filename;
    const { clothe_id } = request.params;

    const updateClotheImageUseCase = container.resolve(
      UpdateClotheImageUseCase
    );

    await updateClotheImageUseCase.execute({
      user_id: id,
      image_file,
      clothe_id,
    });

    return response.status(204).send();
  }
}

export { UpdateClotheImageController };
