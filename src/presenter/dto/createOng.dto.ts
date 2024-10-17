import { IsString, Length, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { AddressDto } from './address.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOngDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;

  @ApiProperty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsString()
  @Length(14, 14, { message: 'O CNPJ deve ter exatamente 14 caracteres.' })
  cnpj: string;
}
