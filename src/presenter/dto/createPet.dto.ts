import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { Size } from '../../domain/pet/enum/size';
import { Species } from '../../domain/pet/enum/species';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePetDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsEnum(Size)
  size: Size;

  @ApiProperty()
  @IsEnum(Species)
  species: Species;

  @ApiProperty()
  @IsBoolean()
  vaccinated: boolean;

  @ApiProperty()
  @IsBoolean()
  neutered: boolean;

  @ApiProperty()
  @IsNumber()
  age: number;

  @ApiProperty()
  @IsUUID()
  ongId: string;

  @ApiProperty()
  @IsOptional()
  @IsUUID()
  userId: string;
}
