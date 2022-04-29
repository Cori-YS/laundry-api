import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Clothe } from "@modules/clothes/infra/typeorm/entities/Clothe";

@Entity("to_wash")
class ToWash {
  @PrimaryColumn()
  id: string;

  @Column()
  user_id: string;

  @Column()
  clothes_id: string;

  @Column()
  service_id: string;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column()
  expected_return_date: Date;

  @Column()
  total: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { ToWash };
