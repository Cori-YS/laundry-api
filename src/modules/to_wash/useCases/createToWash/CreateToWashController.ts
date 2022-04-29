import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateToWashUseCase } from "./CreateToWashUseCase";

class CreateToWashController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { clothes_id, service_id, expected_return_date } = request.body;
    const { id } = request.user;

    const createToWashUseCase = container.resolve(CreateToWashUseCase);

    const towash = await createToWashUseCase.execute({
      user_id: id,
      clothes_id,
      service_id,
      expected_return_date,
    });

    return response.status(201).json(towash);
  }
}

export { CreateToWashController };