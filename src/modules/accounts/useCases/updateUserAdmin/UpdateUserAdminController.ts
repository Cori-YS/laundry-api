import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserAdminUseCase } from "./UpdateUserAdminUseCase";


class UpdateUserAdminController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const updateUserAdminUseCase = container.resolve(UpdateUserAdminUseCase);

    await updateUserAdminUseCase.execute({ user_id: id });

    return response.status(204).send();
  }
}

export { UpdateUserAdminController };