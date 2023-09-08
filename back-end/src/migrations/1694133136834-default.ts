import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1694133136834 implements MigrationInterface {
    name = 'Default1694133136834'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bikes" DROP CONSTRAINT "FK_b81bfc80e86854919301a123d66"`);
        await queryRunner.query(`ALTER TABLE "bikes" RENAME COLUMN "adressbikeId" TO "idadressbike"`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD CONSTRAINT "FK_1959c5375b383800ed369f8ec62" FOREIGN KEY ("idadressbike") REFERENCES "adressbikes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bikes" DROP CONSTRAINT "FK_1959c5375b383800ed369f8ec62"`);
        await queryRunner.query(`ALTER TABLE "bikes" RENAME COLUMN "idadressbike" TO "adressbikeId"`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD CONSTRAINT "FK_b81bfc80e86854919301a123d66" FOREIGN KEY ("adressbikeId") REFERENCES "adressbikes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
