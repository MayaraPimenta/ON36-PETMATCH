import { MigrationInterface, QueryRunner } from 'typeorm';

export class $npmConfigName1728140109888 implements MigrationInterface {
  name = ' $npmConfigName1728140109888';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "ong" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "address" jsonb NOT NULL, "phone" text NOT NULL, "cnpj" text NOT NULL, CONSTRAINT "PK_4d592833215da176127375d0bbb" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "address" jsonb NOT NULL, "phone" text NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "ong"`);
  }
}
