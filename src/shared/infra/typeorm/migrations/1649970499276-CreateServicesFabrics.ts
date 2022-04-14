import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateServicesFabrics1649970499276 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "services_fabrics",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "service_id",
            type: "uuid",
          },
          {
            name: "fabric_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "services_fabrics",
      new TableForeignKey({
        name: "FKServiceFabric",
        referencedTableName: "services",
        referencedColumnNames: ["id"],
        columnNames: ["service_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );

    await queryRunner.createForeignKey(
      "services_fabrics",
      new TableForeignKey({
        name: "FKFabricService",
        referencedTableName: "fabrics",
        referencedColumnNames: ["id"],
        columnNames: ["fabric_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("services_fabrics", "FKServiceFabric");

    await queryRunner.dropForeignKey("services_fabrics", "FKFabricService");

    await queryRunner.dropTable("services_fabrics");
  }
}
