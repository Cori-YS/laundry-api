import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1648772178714 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
                        name: "users",
            columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
            },
            {
              name: "name",
              type: "varchar"
            },
            {
              name: "password",
              type: "varchar"
            },
            {
              name: "email",
              type: "varchar"
            },
            {
              name: "address",
              type: "varchar"
            },
            {
              name: "isAdmin",
              type: "boolean",
              default: "false"
            },
            {
              name: "isEmployee",
              type: "boolean",
              default: "false"
            },
            {
              name: "avatar",
              type: "varchar",
              isNullable: true,
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()"
            },
          ],
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("users");
    }

}
