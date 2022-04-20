import { Category } from "../infra/typeorm/entities/Category";
import { Color } from "../infra/typeorm/entities/Color";
import { Fabrics } from "../infra/typeorm/entities/Fabrics";
import { Size } from "../infra/typeorm/entities/Size";

interface ICreateClotheDTO {
  id?: string;
  user_id?: string;
  name: string;
  description: string;
  color?: Color;
  fabric?: Fabrics;
  category?: Category;
  size?: Size;
  iron: boolean;
  image?: string;
}

export { ICreateClotheDTO };
