import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateClotheTable1650473829878 implements MigrationInterface {
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
            name: "colorId",
            type: "uuid",
          },
          {
            name: "fabricsId",
            type: "uuid",
          },
          {
            name: "categoryId",
            type: "uuid",
          },
          {
            name: "sizeId",
            type: "uuid",
          },
          {
            name: "iron",
            type: "boolean",
          },
          {
            name: "image",
            type: "varchar",
            isNullable: true,
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
        columnNames: ["colorId"],
      })
    );

    await queryRunner.createForeignKey(
      "clothes",
      new TableForeignKey({
        name: "FKFabric",
        referencedTableName: "fabrics",
        referencedColumnNames: ["id"],
        columnNames: ["fabricsId"],
        onDelete: "SET NULL",
      })
    );
    await queryRunner.createForeignKey(
      "clothes",
      new TableForeignKey({
        name: "FKCategory",
        referencedTableName: "categories",
        referencedColumnNames: ["id"],
        columnNames: ["categoryId"],
      })
    );
    await queryRunner.createForeignKey(
      "clothes",
      new TableForeignKey({
        name: "FKSize",
        referencedTableName: "sizes",
        referencedColumnNames: ["id"],
        columnNames: ["sizeId"],
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
