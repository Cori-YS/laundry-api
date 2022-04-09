import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteServiceUseCase } from "./DeleteServiceUseCase";

class DeleteServiceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { service_id } = request.params;
    const deleteServiceUseCase = container.resolve(DeleteServiceUseCase);

    await deleteServiceUseCase.execute(service_id);

    return response.send();
  }
}

export { DeleteServiceController };
