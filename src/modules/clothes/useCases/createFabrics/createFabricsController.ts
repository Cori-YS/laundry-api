import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateFabricsUseCase } from "./createFabricsUseCase";

class CreateFabricsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createFabricsUseCase = container.resolve(CreateFabricsUseCase);

    await createFabricsUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateFabricsController };