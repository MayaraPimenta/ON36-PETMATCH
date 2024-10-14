import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { Size } from '../../common/pets/size';
import { Species } from '../../common/pets/species';

export class CreatePetDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsEnum(Size)
  size: Size;

  @IsEnum(Species)
  species: Species;

  @IsBoolean()
  vaccinated: boolean;

  @IsBoolean()
  neutered: boolean;

  @IsNumber()
  age: number;

  @IsUUID()
  ongId: string;

  @IsOptional()
  @IsUUID()
  userId: string;
}
