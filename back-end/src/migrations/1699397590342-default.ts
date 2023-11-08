import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1699397590342 implements MigrationInterface {
    name = 'Default1699397590342'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "brands" ("id" SERIAL NOT NULL, "name" character varying(20) NOT NULL, CONSTRAINT "PK_b0c437120b624da1034a81fc561" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "adressbikes" ("id" SERIAL NOT NULL, "cep" character varying(15) NOT NULL, "number" integer NOT NULL, CONSTRAINT "PK_5eb74dd50368c0859597aec805d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying(20) NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."rents_ownervaluation_enum" AS ENUM('1', '2', '3', '4', '5')`);
        await queryRunner.query(`CREATE TYPE "public"."rents_clientvaluation_enum" AS ENUM('1', '2', '3', '4', '5')`);
        await queryRunner.query(`CREATE TABLE "rents" ("id" SERIAL NOT NULL, "date" date NOT NULL, "ownervaluation" "public"."rents_ownervaluation_enum" NOT NULL, "clientvaluation" "public"."rents_clientvaluation_enum", "idbike" integer NOT NULL, "idowner" integer NOT NULL, "idclient" integer NOT NULL, CONSTRAINT "PK_43a9961f1448a8d75f9b25156ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "userName" character varying(50) NOT NULL, "mail" character varying(50) NOT NULL, "phone" character varying(20), "password" character varying(50) NOT NULL, "cep" character varying(8), "numero_residencial" character varying(5), CONSTRAINT "UQ_2e5b50f4b7c081eceea476ad128" UNIQUE ("mail"), CONSTRAINT "UQ_a000cca60bcf04454e727699490" UNIQUE ("phone"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."bikes_status_enum" AS ENUM('Disponivel', 'Alugada', 'Pendente')`);
        await queryRunner.query(`CREATE TABLE "bikes" ("id" SERIAL NOT NULL, "description" character varying(200), "hourlyvalue" numeric(10,2), "dailyvalue" numeric(10,2), "status" "public"."bikes_status_enum" NOT NULL DEFAULT 'Disponivel', "idbrand" integer, "idcategory" integer, "iduser" integer, CONSTRAINT "PK_5237c1fcb162998a0d31e640814" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "photos" ("id" SERIAL NOT NULL, "filename" character varying(100) NOT NULL, "idbike" integer NOT NULL, CONSTRAINT "PK_5220c45b8e32d49d767b9b3d725" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "rents" ADD CONSTRAINT "FK_d52f379295e0bf7b349860737c3" FOREIGN KEY ("idbike") REFERENCES "bikes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rents" ADD CONSTRAINT "FK_a0f943251d6cd8ce15a79524b46" FOREIGN KEY ("idowner") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rents" ADD CONSTRAINT "FK_f020693c8758fc5605fb92103e0" FOREIGN KEY ("idclient") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD CONSTRAINT "FK_e2cc5400dfe31ee53796b6254d5" FOREIGN KEY ("idbrand") REFERENCES "brands"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD CONSTRAINT "FK_0ba7ed606b8aaff2615de060bd3" FOREIGN KEY ("idcategory") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD CONSTRAINT "FK_095587c4402c257f1333bd0f74a" FOREIGN KEY ("iduser") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "photos" ADD CONSTRAINT "FK_c8600b91d8a0fae46ff891e257a" FOREIGN KEY ("idbike") REFERENCES "bikes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photos" DROP CONSTRAINT "FK_c8600b91d8a0fae46ff891e257a"`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP CONSTRAINT "FK_095587c4402c257f1333bd0f74a"`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP CONSTRAINT "FK_0ba7ed606b8aaff2615de060bd3"`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP CONSTRAINT "FK_e2cc5400dfe31ee53796b6254d5"`);
        await queryRunner.query(`ALTER TABLE "rents" DROP CONSTRAINT "FK_f020693c8758fc5605fb92103e0"`);
        await queryRunner.query(`ALTER TABLE "rents" DROP CONSTRAINT "FK_a0f943251d6cd8ce15a79524b46"`);
        await queryRunner.query(`ALTER TABLE "rents" DROP CONSTRAINT "FK_d52f379295e0bf7b349860737c3"`);
        await queryRunner.query(`DROP TABLE "photos"`);
        await queryRunner.query(`DROP TABLE "bikes"`);
        await queryRunner.query(`DROP TYPE "public"."bikes_status_enum"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "rents"`);
        await queryRunner.query(`DROP TYPE "public"."rents_clientvaluation_enum"`);
        await queryRunner.query(`DROP TYPE "public"."rents_ownervaluation_enum"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "adressbikes"`);
        await queryRunner.query(`DROP TABLE "brands"`);
    }

}
