import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pet } from '../../../domain/pet/pet';
import { Repository } from 'typeorm';
import { PetRepositoryInterface } from '../../../infrastructure/ports/petRepository.interface';

@Injectable()
export class PetRepository implements PetRepositoryInterface {
  constructor(
    @InjectRepository(Pet)
    private petRepository: Repository<Pet>,
  ) {}

  async save(pet: Pet): Promise<Pet> {
    try {
      const response = await this.petRepository.save(pet);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<Pet[]> {
    try {
      const response = await this.petRepository.find({
        relations: ['ong'],
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string): Promise<Pet> {
    try {
      const entity = await this.petRepository.findOneBy({ id: id });

      if (!entity) {
        throw new NotFoundException('Não encontrei esse bichinho :(');
      }

      const response = this.petRepository.findOne({
        where: { id },
        relations: ['ong'],
      });

      return response;
    } catch (error) {
      throw error;
    }
  }

  async findPetsByQuery(query: any): Promise<Pet[]> {
    const queryBuilder = this.petRepository.createQueryBuilder('pet');

    if (query.species) {
      queryBuilder.andWhere('pet.species = :species', {
        species: query.species,
      });
    }

    if (query.size) {
      queryBuilder.andWhere('pet.size = :size', { size: query.size });
    }

    if (query.age) {
      switch (query.age) {
        case 'filhote':
          queryBuilder.andWhere('pet.age BETWEEN :minAge AND :maxAge', {
            minAge: 0,
            maxAge: 2,
          });
          break;
        case 'idoso':
          queryBuilder.andWhere('pet.age >= :age', { age: 7 });
          break;

        default:
          queryBuilder.andWhere('pet.age BETWEEN :minAge AND :maxAge', {
            minAge: 3,
            maxAge: 7,
          });
          break;
      }
    }

    return await queryBuilder.getMany();
  }

  async update(id: string, pet: Pet): Promise<Pet> {
    try {
      const entity = await this.petRepository.findOneBy({ id: id });

      if (!entity) {
        throw new NotFoundException('Não encontrei esse bichinho :(');
      }

      Object.assign(entity, pet);
      return this.petRepository.save(entity);
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const entity = await this.petRepository.findOneBy({ id: id });

      if (!entity) {
        throw new NotFoundException('Não encontrei esse bichinho :(');
      }

      const response = await this.petRepository.delete({ id: id });
      return response;
    } catch (error) {
      throw error;
    }
  }
}
