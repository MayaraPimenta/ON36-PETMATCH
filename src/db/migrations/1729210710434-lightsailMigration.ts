import { MigrationInterface, QueryRunner } from 'typeorm';

export class LightsailMigration1729210710434 implements MigrationInterface {
  name = 'LightsailMigration1729210710434';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cep" text NOT NULL, "street" text NOT NULL, "number" integer NOT NULL, "neighborhood" text NOT NULL, "city" text NOT NULL, "state" text NOT NULL, "country" text NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "phone" text NOT NULL, "addressId" uuid, CONSTRAINT "REL_217ba147c5de6c107f2fa7fa27" UNIQUE ("addressId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "pet" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "species" character varying NOT NULL, "size" character varying, "vaccinated" boolean NOT NULL, "neutered" boolean NOT NULL, "age" integer NOT NULL, "ongId" uuid NOT NULL, "userId" uuid, CONSTRAINT "PK_b1ac2e88e89b9480e0c5b53fa60" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "ong" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "phone" text NOT NULL, "cnpj" text NOT NULL, "addressId" uuid, CONSTRAINT "REL_992f55b5b25bd07374aa092c90" UNIQUE ("addressId"), CONSTRAINT "PK_4d592833215da176127375d0bbb" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "pet" ADD CONSTRAINT "FK_effcd99a12fe039586dbab1d04d" FOREIGN KEY ("ongId") REFERENCES "ong"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "pet" ADD CONSTRAINT "FK_4eb3b1eeefc7cdeae09f934f479" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "ong" ADD CONSTRAINT "FK_992f55b5b25bd07374aa092c90c" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "ong" DROP CONSTRAINT "FK_992f55b5b25bd07374aa092c90c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "pet" DROP CONSTRAINT "FK_4eb3b1eeefc7cdeae09f934f479"`,
    );
    await queryRunner.query(
      `ALTER TABLE "pet" DROP CONSTRAINT "FK_effcd99a12fe039586dbab1d04d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271"`,
    );
    await queryRunner.query(`DROP TABLE "ong"`);
    await queryRunner.query(`DROP TABLE "pet"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "address"`);
  }
}
