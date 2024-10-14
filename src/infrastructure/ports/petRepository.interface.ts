import { Pet } from '../../domain/pet/pet';

export interface PetRepositoryInterface {
  save(pet: Pet): Promise<Pet>;
  findAll(): Promise<Pet[]>;
  findOne(id: string): Promise<Pet>;
  findPetsByQuery(query: any): Promise<Pet[]>;
  update(id: string, pet: Pet): Promise<Pet>;
  remove(id: string);
}

export const PET_REPOSITORY_INTERFACE = Symbol();
