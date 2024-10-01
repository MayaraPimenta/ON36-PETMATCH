import { IsString, Length, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Endereco } from '../../common/endereco';
import { EnderecoDto } from './endereco.dto';

export class CreateOngDto {
  @IsString()
  nome: string;

  @ValidateNested()
  @Type(() => EnderecoDto)
  endereco: Endereco;

  @IsString()
  telefone: string;

  @IsString()
  @Length(14, 14, { message: 'O CNPJ deve ter exatamente 14 caracteres.' })
  cnpj: string;
}
