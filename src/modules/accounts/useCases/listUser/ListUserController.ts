import { Request, Response} from "express";
import { container } from "tsyringe";
import { ListUserUseCase } from "./ListUserUseCase";

class ListUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUserUseCase = container.resolve(ListUserUseCase);

    const all = await listUserUseCase.execute();

    return response.json(all);
  }
}

export { ListUserController }