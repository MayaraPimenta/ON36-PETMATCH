import { Module } from '@nestjs/common';
import { PetService } from '../../application/pet.service';
import { PetController } from '../../presenter/http/pet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PET_SERVICE_INTERFACE } from '../../presenter/ports/petService.interface';
import { PET_REPOSITORY_INTERFACE } from '../../infrastructure/ports/petRepository.interface';
import { PetRepository } from '../../infrastructure/persistence/pet-repository/pet.repository';
import { Pet } from '../../infrastructure/entities/pet.entity';
import { OngModule } from '../ong/ong.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pet]), OngModule],
  controllers: [PetController],
  providers: [
    {
      provide: PET_SERVICE_INTERFACE,
      useClass: PetService,
    },
    {
      provide: PET_REPOSITORY_INTERFACE,
      useClass: PetRepository,
    },
  ],
})
export class PetModule {}
