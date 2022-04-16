import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateServicesFabricsUseCase } from "./CreateServicesFabricsUseCase";

class CreateServicesFabricsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createServicesFabricsUseCase = container.resolve(
      CreateServicesFabricsUseCase
    );

    const { service_id } = request.params;
    const { fabrics_id } = request.body;

    const service = await createServicesFabricsUseCase.execute({
      service_id,
      fabrics_id,
    });

    return response.json(service);
  }
}

export { CreateServicesFabricsController };
