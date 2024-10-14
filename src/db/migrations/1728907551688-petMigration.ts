import { MigrationInterface, QueryRunner } from 'typeorm';

export class PetMigration1728907551688 implements MigrationInterface {
  name = 'PetMigration1728907551688';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "pet" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "species" character varying NOT NULL, "size" character varying NOT NULL, "vaccinated" boolean NOT NULL, "neutered" boolean NOT NULL, "age" integer NOT NULL, "ongId" uuid, "userId" uuid, CONSTRAINT "PK_b1ac2e88e89b9480e0c5b53fa60" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "pet" ADD CONSTRAINT "FK_effcd99a12fe039586dbab1d04d" FOREIGN KEY ("ongId") REFERENCES "ong"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "pet" ADD CONSTRAINT "FK_4eb3b1eeefc7cdeae09f934f479" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "pet" DROP CONSTRAINT "FK_4eb3b1eeefc7cdeae09f934f479"`,
    );
    await queryRunner.query(
      `ALTER TABLE "pet" DROP CONSTRAINT "FK_effcd99a12fe039586dbab1d04d"`,
    );
    await queryRunner.query(`DROP TABLE "pet"`);
  }
}
