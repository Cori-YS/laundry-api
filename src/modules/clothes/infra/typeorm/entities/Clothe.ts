import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Category } from "./Category";
import { Color } from "./Color";
import { Fabrics } from "./Fabrics";
import { Size } from "./Size";

@Entity("clothes")
class Clothe {
  @PrimaryColumn()
  id: string;

  @Column()
  user_id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToOne(() => Color)
  @JoinColumn({ name: "colorId" })
  color: Color;

  @OneToOne(() => Fabrics)
  @JoinColumn({ name: "fabricsId" })
  fabric: Fabrics;

  @OneToOne(() => Category)
  @JoinColumn({ name: "categoryId" })
  category: Category;

  @OneToOne(() => Size)
  @JoinColumn({ name: "sizeId" })
  size: Size;

  @Column()
  iron: boolean;

  @Column()
  image: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Clothe };
