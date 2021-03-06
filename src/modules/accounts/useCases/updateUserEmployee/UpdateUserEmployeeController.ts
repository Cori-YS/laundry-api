import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserEmployeeUseCase } from "./UpdateUserEmployeeUseCase";


class UpdateUserEmployeeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { isEmployee } = request.body;

    const updateUserEmployeeUseCase = container.resolve(UpdateUserEmployeeUseCase);

    await updateUserEmployeeUseCase.execute({ user_id: id, isEmployee });

    return response.status(204).send();
  }
}

export { UpdateUserEmployeeController }
