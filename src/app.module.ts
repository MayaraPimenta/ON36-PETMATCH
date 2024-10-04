import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OngModule } from './domain/ong/ong.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DB_URL'),
        migrations: [__dirname + '/db/migrations/*.ts'],
        entities: [__dirname + '/infrastructure/entities/*{.ts,.js}'],
        synchronize: false,
        cli: {
          migrationsDir: 'src/infrastructure/migrations',
        },
      }),
    }),
    OngModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
