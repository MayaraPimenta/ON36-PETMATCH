import { IsString, Length, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { AddressDto } from './address.dto';

export class CreateOngDto {
  @IsString()
  name: string;

  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;

  @IsString()
  phone: string;

  @IsString()
  @Length(14, 14, { message: 'O CNPJ deve ter exatamente 14 caracteres.' })
  cnpj: string;
}
