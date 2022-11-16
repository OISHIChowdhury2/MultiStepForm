import { MigrationInterface, QueryRunner } from "typeorm";

export class register1668575298693 implements MigrationInterface {
    name = 'register1668575298693'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "register" ("id" SERIAL NOT NULL, "companyName" character varying NOT NULL, "representativeName" character varying NOT NULL, "representativeId" character varying NOT NULL, "companyAddress" character varying NOT NULL, "companyEmail" character varying NOT NULL, "companyMobile" character varying NOT NULL, "ownerName" character varying NOT NULL, "ownerContact" character varying NOT NULL, "postalCode" character varying NOT NULL, "tinCertificateImage" character varying NOT NULL, CONSTRAINT "UQ_60e227abeb0a6908931be751f3d" UNIQUE ("companyName"), CONSTRAINT "UQ_2afaa40b4c8ed877a5e4ad96eee" UNIQUE ("representativeId"), CONSTRAINT "UQ_9e26663cfa6715d16156aa80d4f" UNIQUE ("companyEmail"), CONSTRAINT "UQ_db8daa14eaaa5f38cca6a2ca2ae" UNIQUE ("companyMobile"), CONSTRAINT "PK_14473cc8f2caa81fd19f7648d54" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "register"`);
    }

}
