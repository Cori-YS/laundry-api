import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterUserAddisActive1650232200879 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "users",
      new TableColumn({
        name: "isActive",
        type: "boolean",
        default: "true",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "isActive");
  }
}
