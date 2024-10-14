import { Inject, Injectable } from '@nestjs/common';
import { CreatePetDto } from '../presenter/dto/createPet.dto';
import { PetServiceInterface } from '../presenter/ports/petService.interface';
import { Pet } from '../domain/pet/pet';
import {
  PET_REPOSITORY_INTERFACE,
  PetRepositoryInterface,
} from '../infrastructure/ports/petRepository.interface';
import { OngRepository } from '../infrastructure/persistence/ong-repository/ong.repository';
import { UpdatePetDto } from '../presenter/dto/updatePet.dto';
import { UserRepository } from '../infrastructure/persistence/user-repository/user.repository';

@Injectable()
export class PetService implements PetServiceInterface {
  constructor(
    @Inject(PET_REPOSITORY_INTERFACE)
    private readonly petRepositoryInterface: PetRepositoryInterface,
    private readonly ongRepository: OngRepository,
    private readonly userRepository: UserRepository,
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

  async findAll(): Promise<Pet[]> {
    return await this.petRepositoryInterface.findAll();
  }

  async findOne(id: string): Promise<Pet> {
    return await this.petRepositoryInterface.findOne(id);
  }

  async findPetsByQuery(query: any): Promise<Pet[]> {
    return await this.petRepositoryInterface.findPetsByQuery(query);
  }

  async update(id: string, updatePetDto: UpdatePetDto): Promise<Pet> {
    const ong = await this.ongRepository.findOne(updatePetDto.ongId);
    if (!ong) {
      throw new Error('Ong não encontrada');
    }

    if (!updatePetDto.userId) {
      const pet = new Pet(
        updatePetDto.name,
        updatePetDto.size,
        updatePetDto.species,
        updatePetDto.vaccinated,
        updatePetDto.neutered,
        updatePetDto.age,
        ong,
      );

      return await this.petRepositoryInterface.update(id, pet);
    }

    const user = await this.userRepository.findOne(updatePetDto.userId);
    if (!user) {
      throw new Error('Ong não encontrada');
    }

    const pet = new Pet(
      updatePetDto.name,
      updatePetDto.size,
      updatePetDto.species,
      updatePetDto.vaccinated,
      updatePetDto.neutered,
      updatePetDto.age,
      ong,
      user,
    );

    return await this.petRepositoryInterface.update(id, pet);
  }

  async remove(id: string) {
    return await this.petRepositoryInterface.remove(id);
  }
}
