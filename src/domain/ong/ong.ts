import { Address } from '../../common/address';

export class Ong {
  id: string;

  constructor(
    public name: string,
    public address: Address,
    public phone: string,
    public cnpj: string,
  ) {}
}
