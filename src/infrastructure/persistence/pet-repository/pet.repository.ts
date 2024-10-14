import { Injectable } from '@nestjs/common';
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

  // async findAll(): Promise<Pet[]> {
  //   try {
  //     const response = await this.petRepository.find();
  //     return response;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // async findOne(id: string): Promise<Pet> {
  //   try {
  //     const entity = await this.petRepository.findOneBy({ id: id });

  //     if (!entity) {
  //       throw new NotFoundException('Usuário(a) não encontrado(a)');
  //     }

  //     const response = this.petRepository.findOne({
  //       where: { id },
  //       relations: ['address'],
  //     });

  //     return response;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // async update(id: string, pet: Pet): Promise<Pet> {
  //   try {
  //     const entity = await this.petRepository.findOneBy({ id: id });

  //     if (!entity) {
  //       throw new NotFoundException('Usuário(a) não encontrado(a)');
  //     }

  //     Object.assign(entity, pet);
  //     return this.petRepository.save(entity);
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // async remove(id: string) {
  //   try {
  //     const entity = await this.petRepository.findOneBy({ id: id });

  //     if (!entity) {
  //       throw new NotFoundException('Usuário(a) não encontrado(a)');
  //     }

  //     const response = await this.petRepository.delete({ id: id });
  //     return response;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}
