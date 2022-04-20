import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSizeUseCase } from "./CreateSizeUseCase";

class CreateSizeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createSizeUseCase = container.resolve(CreateSizeUseCase);

    const size = await createSizeUseCase.execute(name);

    return response.json(size);
  }
}

export { CreateSizeController };
