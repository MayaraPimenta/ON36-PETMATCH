import { IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Address } from '../../common/address';
import { AddressDto } from './address.dto';

export class CreateUserDto {
  @IsString()
  name: string;

  @ValidateNested()
  @Type(() => AddressDto)
  address: Address;

  @IsString()
  phone: string;
}
