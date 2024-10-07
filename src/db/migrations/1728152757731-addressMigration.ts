import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddressMigration1728152757731 implements MigrationInterface {
  name = 'AddressMigration1728152757731';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "ong" RENAME COLUMN "address" TO "addressId"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" RENAME COLUMN "address" TO "addressId"`,
    );
    await queryRunner.query(
      `CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cep" text NOT NULL, "street" text NOT NULL, "number" integer NOT NULL, "neighborhood" text NOT NULL, "city" text NOT NULL, "state" text NOT NULL, "country" text NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`ALTER TABLE "ong" DROP COLUMN "addressId"`);
    await queryRunner.query(`ALTER TABLE "ong" ADD "addressId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "ong" ADD CONSTRAINT "UQ_992f55b5b25bd07374aa092c90c" UNIQUE ("addressId")`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "addressId"`);
    await queryRunner.query(`ALTER TABLE "user" ADD "addressId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "UQ_217ba147c5de6c107f2fa7fa271" UNIQUE ("addressId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "ong" ADD CONSTRAINT "FK_992f55b5b25bd07374aa092c90c" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271"`,
    );
    await queryRunner.query(
      `ALTER TABLE "ong" DROP CONSTRAINT "FK_992f55b5b25bd07374aa092c90c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "UQ_217ba147c5de6c107f2fa7fa271"`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "addressId"`);
    await queryRunner.query(
      `ALTER TABLE "user" ADD "addressId" jsonb NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "ong" DROP CONSTRAINT "UQ_992f55b5b25bd07374aa092c90c"`,
    );
    await queryRunner.query(`ALTER TABLE "ong" DROP COLUMN "addressId"`);
    await queryRunner.query(`ALTER TABLE "ong" ADD "addressId" jsonb NOT NULL`);
    await queryRunner.query(`DROP TABLE "address"`);
    await queryRunner.query(
      `ALTER TABLE "user" RENAME COLUMN "addressId" TO "address"`,
    );
    await queryRunner.query(
      `ALTER TABLE "ong" RENAME COLUMN "addressId" TO "address"`,
    );
  }
}
