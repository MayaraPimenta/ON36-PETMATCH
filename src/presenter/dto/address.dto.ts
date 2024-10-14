import { IsString, IsNumber, IsIn, Length, IsEnum } from 'class-validator';
import { States } from '../../common/states';

export class AddressDto {
  @IsString()
  @Length(1, 8)
  cep: string;

  @IsString()
  @Length(1, 100)
  street: string;

  @IsNumber()
  number: number;

  @IsString()
  @Length(1, 50)
  neighborhood: string;

  @IsString()
  @Length(1, 50)
  city: string;

  @IsEnum(States)
  state: States;

  @IsString()
  @IsIn(['Brasil'])
  country: 'Brasil';
}
