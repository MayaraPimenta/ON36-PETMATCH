import { IsString, IsNumber, IsIn, Length, IsEnum } from 'class-validator';
import { States } from '../../common/states';
import { ApiProperty } from '@nestjs/swagger';

export class AddressDto {
  @ApiProperty()
  @IsString()
  @Length(1, 8)
  cep: string;

  @ApiProperty()
  @IsString()
  @Length(1, 100)
  street: string;

  @ApiProperty()
  @IsNumber()
  number: number;

  @ApiProperty()
  @IsString()
  @Length(1, 50)
  neighborhood: string;

  @ApiProperty()
  @IsString()
  @Length(1, 50)
  city: string;

  @ApiProperty()
  @IsEnum(States)
  state: States;

  @ApiProperty()
  @IsString()
  @IsIn(['Brasil'])
  country: 'Brasil';
}
