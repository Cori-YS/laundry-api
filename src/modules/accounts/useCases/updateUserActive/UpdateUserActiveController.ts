import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserActiveUseCase } from "./UpdateUserActiveUseCase";


class UpdateUserActiveController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { isActive } = request.body;

    const updateUserActiveUseCase = container.resolve(UpdateUserActiveUseCase);

    await updateUserActiveUseCase.execute({ user_id: id, isActive });

    return response.status(204).send();
  }
}

export { UpdateUserActiveController };