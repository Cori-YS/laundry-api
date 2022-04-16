import { Fabrics } from "../infra/typeorm/entities/Fabrics";

interface ICreateServicesDTO {
  id?: string;
  name: string;
  description?: string;
  price: number;
  fabrics?: Fabrics[];
}

export { ICreateServicesDTO };
