import { MigrationInterface, QueryRunner } from 'typeorm';

export class registercreate1666675697116 implements MigrationInterface {
  name = 'registercreate1666675697116';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "logs" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, "desc" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "createdBy" character varying NOT NULL DEFAULT 'ADMIN', CONSTRAINT "PK_fb1b805f2f7795de79fa69340ba" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "logs"`);
  }
}
