import { Pet } from '../../domain/pet/pet';
import { CreatePetDto } from '../dto/createPet.dto';
import { UpdatePetDto } from '../dto/updatePet.dto';

export interface PetServiceInterface {
  create(createPetDto: CreatePetDto): Promise<Pet>;
  findAll(): Promise<Pet[]>;
  findOne(id: string): Promise<Pet>;
  findPetsByQuery(query: any): Promise<Pet[]>;
  update(id: string, updatePetDto: UpdatePetDto): Promise<Pet>;
  remove(id: string);
}

export const PET_SERVICE_INTERFACE = Symbol();
