import { Inject, Injectable } from '@nestjs/common';
import { CreatePetDto } from '../presenter/dto/createPet.dto';
import { PetServiceInterface } from '../presenter/ports/petService.interface';
import { Pet } from '../domain/pet/pet';
import {
  PET_REPOSITORY_INTERFACE,
  PetRepositoryInterface,
} from '../infrastructure/ports/petRepository.interface';
import { OngRepository } from '../infrastructure/persistence/ong-repository/ong.repository';
// import { UpdatePetDto } from '../presenter/dto/updatePet.dto';

@Injectable()
export class PetService implements PetServiceInterface {
  constructor(
    @Inject(PET_REPOSITORY_INTERFACE)
    private readonly petRepositoryInterface: PetRepositoryInterface,
    private readonly ongRepository: OngRepository,
  ) {}

  async create(createPetDto: CreatePetDto): Promise<Pet> {
    const ong = await this.ongRepository.findOne(createPetDto.ongId);

    if (!ong) {
      throw new Error('Ong não encontrada');
    }

    const pet = new Pet(
      createPetDto.name,
      createPetDto.size,
      createPetDto.species,
      createPetDto.vaccinated,
      createPetDto.neutered,
      createPetDto.age,
      ong,
    );

    return await this.petRepositoryInterface.save(pet);
  }

  // findAll() {
  //   return `This action returns all pet`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} pet`;
  // }

  // update(id: number, updatePetDto: UpdatePetDto) {
  //   return `This action updates a #${id} pet`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} pet`;
  // }
}
