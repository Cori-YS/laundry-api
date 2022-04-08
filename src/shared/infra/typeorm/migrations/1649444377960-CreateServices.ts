import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateServices1649444377960 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "services",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
            },
            {
              name: "name",
              type: "varchar",
            },
            {
              name: "description",
              type: "varchar",
            },
            {
              name: "price",
              type: "numeric",
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()",
            },
          ],
      })
    );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("services");
    }

}
