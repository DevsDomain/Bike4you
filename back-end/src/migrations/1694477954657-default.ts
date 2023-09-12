import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1694477954657 implements MigrationInterface {
    name = 'Default1694477954657'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rents" DROP CONSTRAINT "FK_8be6a0cefba50f9584f81db1820"`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP CONSTRAINT "FK_b81bfc80e86854919301a123d66"`);
        await queryRunner.query(`ALTER TABLE "rents" DROP COLUMN "ownerevaluation"`);
        await queryRunner.query(`ALTER TABLE "rents" DROP COLUMN "clientevaluation"`);
        await queryRunner.query(`ALTER TABLE "rents" DROP COLUMN "iduser"`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP COLUMN "sppedkit"`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP COLUMN "aro"`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP COLUMN "suspensao"`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP COLUMN "dailylyvalue"`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP CONSTRAINT "REL_b81bfc80e86854919301a123d6"`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP COLUMN "adressbikeId"`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP COLUMN "status"`);
        await queryRunner.query(`CREATE TYPE "public"."rents_ownervaluation_enum" AS ENUM('1', '2', '3', '4', '5')`);
        await queryRunner.query(`ALTER TABLE "rents" ADD "ownervaluation" "public"."rents_ownervaluation_enum" NOT NULL`);
        await queryRunner.query(`CREATE TYPE "public"."rents_clientvaluation_enum" AS ENUM('1', '2', '3', '4', '5')`);
        await queryRunner.query(`ALTER TABLE "rents" ADD "clientvaluation" "public"."rents_clientvaluation_enum"`);
        await queryRunner.query(`ALTER TABLE "rents" ADD "idowner" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "rents" ADD "idclient" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD "speedkit" character varying(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD "rim" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD "suspension" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD "dailyvalue" numeric(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD "latitude" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD "longitude" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "photos" DROP CONSTRAINT "FK_c8600b91d8a0fae46ff891e257a"`);
        await queryRunner.query(`ALTER TABLE "photos" ALTER COLUMN "idbike" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "rents" DROP CONSTRAINT "FK_d52f379295e0bf7b349860737c3"`);
        await queryRunner.query(`ALTER TABLE "rents" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "rents" ADD "date" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "rents" ALTER COLUMN "idbike" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "mail"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "mail" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_2e5b50f4b7c081eceea476ad128" UNIQUE ("mail")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_a000cca60bcf04454e727699490" UNIQUE ("phone")`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP CONSTRAINT "FK_e2cc5400dfe31ee53796b6254d5"`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP CONSTRAINT "FK_0ba7ed606b8aaff2615de060bd3"`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP CONSTRAINT "FK_095587c4402c257f1333bd0f74a"`);
        await queryRunner.query(`ALTER TYPE "public"."bikes_material_enum" RENAME TO "bikes_material_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."bikes_material_enum" AS ENUM('aluminio', 'carbono', 'ferro')`);
        await queryRunner.query(`ALTER TABLE "bikes" ALTER COLUMN "material" TYPE "public"."bikes_material_enum" USING "material"::"text"::"public"."bikes_material_enum"`);
        await queryRunner.query(`DROP TYPE "public"."bikes_material_enum_old"`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP COLUMN "hourlyvalue"`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD "hourlyvalue" numeric(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bikes" ALTER COLUMN "idbrand" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bikes" ALTER COLUMN "idcategory" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bikes" ALTER COLUMN "iduser" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "photos" ADD CONSTRAINT "FK_c8600b91d8a0fae46ff891e257a" FOREIGN KEY ("idbike") REFERENCES "bikes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rents" ADD CONSTRAINT "FK_d52f379295e0bf7b349860737c3" FOREIGN KEY ("idbike") REFERENCES "bikes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rents" ADD CONSTRAINT "FK_a0f943251d6cd8ce15a79524b46" FOREIGN KEY ("idowner") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rents" ADD CONSTRAINT "FK_f020693c8758fc5605fb92103e0" FOREIGN KEY ("idclient") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD CONSTRAINT "FK_e2cc5400dfe31ee53796b6254d5" FOREIGN KEY ("idbrand") REFERENCES "brands"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD CONSTRAINT "FK_0ba7ed606b8aaff2615de060bd3" FOREIGN KEY ("idcategory") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD CONSTRAINT "FK_095587c4402c257f1333bd0f74a" FOREIGN KEY ("iduser") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bikes" DROP CONSTRAINT "FK_095587c4402c257f1333bd0f74a"`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP CONSTRAINT "FK_0ba7ed606b8aaff2615de060bd3"`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP CONSTRAINT "FK_e2cc5400dfe31ee53796b6254d5"`);
        await queryRunner.query(`ALTER TABLE "rents" DROP CONSTRAINT "FK_f020693c8758fc5605fb92103e0"`);
        await queryRunner.query(`ALTER TABLE "rents" DROP CONSTRAINT "FK_a0f943251d6cd8ce15a79524b46"`);
        await queryRunner.query(`ALTER TABLE "rents" DROP CONSTRAINT "FK_d52f379295e0bf7b349860737c3"`);
        await queryRunner.query(`ALTER TABLE "photos" DROP CONSTRAINT "FK_c8600b91d8a0fae46ff891e257a"`);
        await queryRunner.query(`ALTER TABLE "bikes" ALTER COLUMN "iduser" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bikes" ALTER COLUMN "idcategory" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bikes" ALTER COLUMN "idbrand" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP COLUMN "hourlyvalue"`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD "hourlyvalue" integer NOT NULL`);
        await queryRunner.query(`CREATE TYPE "public"."bikes_material_enum_old" AS ENUM('alumínio', 'carbono', 'ferro')`);
        await queryRunner.query(`ALTER TABLE "bikes" ALTER COLUMN "material" TYPE "public"."bikes_material_enum_old" USING "material"::"text"::"public"."bikes_material_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."bikes_material_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."bikes_material_enum_old" RENAME TO "bikes_material_enum"`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD CONSTRAINT "FK_095587c4402c257f1333bd0f74a" FOREIGN KEY ("iduser") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD CONSTRAINT "FK_0ba7ed606b8aaff2615de060bd3" FOREIGN KEY ("idcategory") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD CONSTRAINT "FK_e2cc5400dfe31ee53796b6254d5" FOREIGN KEY ("idbrand") REFERENCES "brands"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_a000cca60bcf04454e727699490"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_2e5b50f4b7c081eceea476ad128"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "mail"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "mail" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "rents" ALTER COLUMN "idbike" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "rents" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "rents" ADD "date" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "rents" ADD CONSTRAINT "FK_d52f379295e0bf7b349860737c3" FOREIGN KEY ("idbike") REFERENCES "bikes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "photos" ALTER COLUMN "idbike" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "photos" ADD CONSTRAINT "FK_c8600b91d8a0fae46ff891e257a" FOREIGN KEY ("idbike") REFERENCES "bikes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP COLUMN "longitude"`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP COLUMN "latitude"`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP COLUMN "dailyvalue"`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP COLUMN "suspension"`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP COLUMN "rim"`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP COLUMN "speedkit"`);
        await queryRunner.query(`ALTER TABLE "rents" DROP COLUMN "idclient"`);
        await queryRunner.query(`ALTER TABLE "rents" DROP COLUMN "idowner"`);
        await queryRunner.query(`ALTER TABLE "rents" DROP COLUMN "clientvaluation"`);
        await queryRunner.query(`DROP TYPE "public"."rents_clientvaluation_enum"`);
        await queryRunner.query(`ALTER TABLE "rents" DROP COLUMN "ownervaluation"`);
        await queryRunner.query(`DROP TYPE "public"."rents_ownervaluation_enum"`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD "status" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD "adressbikeId" integer`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD CONSTRAINT "REL_b81bfc80e86854919301a123d6" UNIQUE ("adressbikeId")`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD "dailylyvalue" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD "suspensao" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD "aro" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD "sppedkit" character varying(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "rents" ADD "iduser" integer`);
        await queryRunner.query(`ALTER TABLE "rents" ADD "clientevaluation" integer`);
        await queryRunner.query(`ALTER TABLE "rents" ADD "ownerevaluation" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD CONSTRAINT "FK_b81bfc80e86854919301a123d66" FOREIGN KEY ("adressbikeId") REFERENCES "adressbikes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rents" ADD CONSTRAINT "FK_8be6a0cefba50f9584f81db1820" FOREIGN KEY ("iduser") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
