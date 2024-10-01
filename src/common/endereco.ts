import { EstadosBrasileiros } from './estadosBrasileiros';

export type Endereco = {
  rua: string;
  numero: number;
  bairro: string;
  cidade: string;
  estado: EstadosBrasileiros;
  pais: 'Brasil';
};
