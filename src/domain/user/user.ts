import { Address } from '../../common/address';

export class User {
  id: string;

  constructor(
    public name: string,
    public address: Address,
    public phone: string,
  ) {}
}
