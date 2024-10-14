import { Module } from '@nestjs/common';
import { OngService } from '../../application/ong.service';
import { OngController } from '../../presenter/http/ong.controller';
import { OngRepository } from '../../infrastructure/persistence/ong-repository/ong.repository';
import { ONG_SERVICE_INTERFACE } from '../../presenter/ports/ongService.interface';
import { ONG_REPOSITORY_INTERFACE } from '../../infrastructure/ports/ongRepository.interface';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ong } from 'src/infrastructure/entities/ong.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ong])],
  controllers: [OngController],
  providers: [
    {
      provide: ONG_SERVICE_INTERFACE,
      useClass: OngService,
    },
    {
      provide: ONG_REPOSITORY_INTERFACE,
      useClass: OngRepository,
    },
    OngRepository,
  ],
  exports: [OngRepository],
})
export class OngModule {}
