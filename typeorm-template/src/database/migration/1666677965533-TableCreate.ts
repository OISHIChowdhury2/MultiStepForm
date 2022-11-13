import { MigrationInterface, QueryRunner } from 'typeorm';

export class TableCreate1666677965533 implements MigrationInterface {
  name = 'TableCreate1666677965533';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "register" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL, "status" character varying NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_a25c9faec6801989b434563ed1b" UNIQUE ("email"), CONSTRAINT "PK_14473cc8f2caa81fd19f7648d54" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "register"`);
  }
}
