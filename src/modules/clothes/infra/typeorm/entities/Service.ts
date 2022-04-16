import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Fabrics } from "./Fabrics";

@Entity("services")
class Service {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @ManyToMany(() => Fabrics)
  @JoinTable({
    name: "services_fabrics",
    joinColumns: [{ name: "service_id" }],
    inverseJoinColumns: [{ name: "fabric_id" }],
  })
  fabrics: Fabrics[];

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Service };
