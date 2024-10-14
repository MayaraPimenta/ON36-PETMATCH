import { Pet } from '../../domain/pet/pet';

export interface PetRepositoryInterface {
  save(pet: Pet): Promise<Pet>;
  // findAll(): Promise<Pet[]>;
  // findOne(id: string): Promise<Pet>;
  // update(id: string, ong: Pet): Promise<Pet>;
  // remove(id: string);
}

export const PET_REPOSITORY_INTERFACE = Symbol();
