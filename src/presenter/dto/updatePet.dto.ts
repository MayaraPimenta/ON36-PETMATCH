import { PartialType } from '@nestjs/mapped-types';
import { CreatePetDto } from './createPet.dto';

export class UpdatePetDto extends PartialType(CreatePetDto) {}
