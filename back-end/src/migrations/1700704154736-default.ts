import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1700704154736 implements MigrationInterface {
    name = 'Default1700704154736'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rents" ALTER COLUMN "date" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rents" ALTER COLUMN "date" SET NOT NULL`);
    }

}
