import { Request, Response } from "express";
import { container } from "tsyringe";
import { CloseAccountUseCase } from "./CloseAccountUseCase";

class CloseAccountController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id, password } = request.body;

    const closeAccountUseCase = container.resolve(CloseAccountUseCase);

    await closeAccountUseCase.execute(user_id, password);

    return response.send();
  }
}

export { CloseAccountController };
