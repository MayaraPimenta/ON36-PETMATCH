import { PartialType } from '@nestjs/swagger';
import { CreatePetDto } from './createPet.dto';

export class UpdatePetDto extends PartialType(CreatePetDto) {}
