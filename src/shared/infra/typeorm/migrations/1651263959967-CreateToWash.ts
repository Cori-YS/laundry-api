import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateToWash1651263959967 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "to_wash",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "clothes_id",
            type: "uuid",
          },
          {
            name: "service_id",
            type: "uuid",
          },
          {
            name: "start_date",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "end_date",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "expected_return_date",
            type: "timestamp",
          },
          {
            name: "total",
            type: "numeric",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "to_wash",
      new TableForeignKey({
        name: "FKUserToWash",
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        columnNames: ["user_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );

    await queryRunner.createForeignKey(
      "to_wash",
      new TableForeignKey({
        name: "FKclotheToWash",
        referencedTableName: "clothes",
        referencedColumnNames: ["id"],
        columnNames: ["clothes_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );

    await queryRunner.createForeignKey(
      "to_wash",
      new TableForeignKey({
        name: "FKserviceToWash",
        referencedTableName: "services",
        referencedColumnNames: ["id"],
        columnNames: ["service_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("to_wash");
  }
}
