import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateServicesFabrics1649970499276 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({ name: "services_fabrics", columns: [] })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
