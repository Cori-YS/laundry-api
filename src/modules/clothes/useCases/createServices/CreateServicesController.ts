import { Response, Request } from "express";
import { container } from "tsyringe";
import { CreateServicesUseCase } from "./CreateServicesUseCase";

class CreateServicesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description,  price } = request.body;

    const createServicesUseCase = container.resolve(CreateServicesUseCase);

    await createServicesUseCase.execute({ name, description, price });

    return response.status(201).send();
  }
}

export { CreateServicesController };
