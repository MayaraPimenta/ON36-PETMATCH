import { Pet } from '../../domain/pet/pet';
import { CreatePetDto } from '../dto/createPet.dto';

export interface PetServiceInterface {
  create(createPetDto: CreatePetDto): Promise<Pet>;
  // findAll(): Promise<User[]>;
  // findOne(id: string): Promise<User>;
  // update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
  // remove(id: string);
}

export const PET_SERVICE_INTERFACE = Symbol();
