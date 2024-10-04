import { IsString, Length, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Address } from '../../common/address';
import { AddressDto } from './address.dto';

export class CreateOngDto {
  @IsString()
  name: string;

  @ValidateNested()
  @Type(() => AddressDto)
  address: Address;

  @IsString()
  phone: string;

  @IsString()
  @Length(14, 14, { message: 'O CNPJ deve ter exatamente 14 caracteres.' })
  cnpj: string;
}
