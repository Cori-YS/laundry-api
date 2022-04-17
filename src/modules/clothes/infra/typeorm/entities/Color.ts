import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("colors")
class Color {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Color };
