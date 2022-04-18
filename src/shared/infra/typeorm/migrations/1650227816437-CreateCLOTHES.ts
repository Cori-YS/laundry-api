import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateCLOTHES1650227816437 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "clothes",
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
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "color_id",
            type: "uuid",
          },
          {
            name: "fabric_id",
            type: "uuid",
          },
          {
            name: "category_id",
            type: "uuid",
          },
          {
            name: "size_id",
            type: "uuid",
          },
          {
            name: "iron",
            type: "boolean",
          },
          {
            name: "image",
            type: "varchar",
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
      "clothes",
      new TableForeignKey({
        name: "FKUser",
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        columnNames: ["user_id"],
      })
    );

    await queryRunner.createForeignKey(
      "clothes",
      new TableForeignKey({
        name: "FKColor",
        referencedTableName: "colors",
        referencedColumnNames: ["id"],
        columnNames: ["color_id"],
      })
    );

    await queryRunner.createForeignKey(
      "clothes",
      new TableForeignKey({
        name: "FKFabric",
        referencedTableName: "fabrics",
        referencedColumnNames: ["id"],
        columnNames: ["fabric_id"],
        onDelete: "SET NULL",
      })
    );
    await queryRunner.createForeignKey(
      "clothes",
      new TableForeignKey({
        name: "FKCategory",
        referencedTableName: "categories",
        referencedColumnNames: ["id"],
        columnNames: ["category_id"],
      })
    );
    await queryRunner.createForeignKey(
      "clothes",
      new TableForeignKey({
        name: "FKSize",
        referencedTableName: "sizes",
        referencedColumnNames: ["id"],
        columnNames: ["size_id"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("clothes", "FKUser");
    await queryRunner.dropForeignKey("clothes", "FKColor");
    await queryRunner.dropForeignKey("clothes", "FKFabric");
    await queryRunner.dropForeignKey("clothes", "FKCategory");
    await queryRunner.dropForeignKey("clothes", "FKSize");
    await queryRunner.dropTable("clothes");
  }
}
