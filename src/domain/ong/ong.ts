import { Endereco } from '../../common/endereco';

export class Ong {
  id: string;

  constructor(
    public nome: string,
    public endereco: Endereco,
    public telefone: string,
    public cnpj: string,
  ) {}
}
