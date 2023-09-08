import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1694132935886 implements MigrationInterface {
    name = 'Default1694132935886'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bikes" RENAME COLUMN "dailylyvalue" TO "dailyvalue"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bikes" RENAME COLUMN "dailyvalue" TO "dailylyvalue"`);
    }

}
