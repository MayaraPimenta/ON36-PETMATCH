import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { Ong } from '../infrastructure/entities/ong.entity';
import { User } from '../infrastructure/entities/user.entity';
import { Address } from '../infrastructure/entities/address.entity';
import { Pet } from '../infrastructure/entities/pet.entity';

config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DB_URL,
  entities: [Ong, User, Address, Pet],
  synchronize: false,
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  migrationsRun: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
