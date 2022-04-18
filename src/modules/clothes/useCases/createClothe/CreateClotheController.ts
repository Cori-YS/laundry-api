import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateClotheUseCase } from "./CreateClotheUseCase";

class CreateClotheController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createClotheUseCase = container.resolve(CreateClotheUseCase);

    const { id } = request.user;

    const {
      name,
      description,
      color_id,
      fabric_id,
      category_id,
      size_id,
      iron,
    } = request.body;

    const clothe = await createClotheUseCase.execute({
      name,
      user_id: id,
      description,
      color_id,
      fabric_id,
      category_id,
      size_id,
      iron,
    });

    return response.json(clothe);
  }
}

export { CreateClotheController };
