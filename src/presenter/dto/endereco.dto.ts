import { IsString, IsNumber, IsIn, Length, IsEnum } from 'class-validator';
import { EstadosBrasileiros } from '../../common/estadosBrasileiros';

export class EnderecoDto {
  @IsString()
  @Length(1, 100)
  rua: string;

  @IsNumber()
  numero: number;

  @IsString()
  @Length(1, 50)
  bairro: string;

  @IsString()
  @Length(1, 50)
  cidade: string;

  @IsEnum(EstadosBrasileiros)
  estado: EstadosBrasileiros;

  @IsString()
  @IsIn(['Brasil'])
  pais: 'Brasil';
}
