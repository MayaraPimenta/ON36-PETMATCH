import { Size } from '../../common/pets/size';
import { Species } from '../../common/pets/species';
import { Ong } from '../ong/ong';

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
  ) {}
}
