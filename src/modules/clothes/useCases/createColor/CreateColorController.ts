import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateColorUseCase } from "./CreateColorUseCase";

class CreateColorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createColorUseCase = container.resolve(CreateColorUseCase);

    const color = await createColorUseCase.execute({ name });

    return response.json(color);
  }
}

export { CreateColorController };
