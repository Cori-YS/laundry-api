import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListFabricsUseCase } from "./ListFabricsUseCase";

class ListFabricsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listFabricsUseCase = container.resolve(ListFabricsUseCase);

    const fabricsList = await listFabricsUseCase.execute();

    return response.json(fabricsList);
  }
}

export { ListFabricsController };
