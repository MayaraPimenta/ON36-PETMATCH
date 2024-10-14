import { Size } from './enum/size';
import { Species } from './enum/species';
import { Ong } from '../ong/ong';
import { User } from '../user/user';

export class Pet {
  id: string;

  constructor(
    public name: string,
    public size: Size,
    public species: Species,
    public vaccinated: boolean,
    public neutered: boolean,
    public age: number,
    public ong: Ong,
    public user?: User,
  ) {}
}
