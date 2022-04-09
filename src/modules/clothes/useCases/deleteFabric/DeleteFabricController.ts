import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteFabricsUseCase } from "./DeleteFabricUseCase";

class DeleteFabricController {
  async handle(request: Request, response: Response): Promise<Response> {
    const deleteFabricsUseCase = container.resolve(DeleteFabricsUseCase);
    const { fabric_id } = request.params;

    await deleteFabricsUseCase.execute(fabric_id);

    return response.send();
  }
}

export { DeleteFabricController };
