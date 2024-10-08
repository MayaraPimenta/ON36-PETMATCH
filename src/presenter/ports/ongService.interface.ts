import { Ong } from '../../domain/ong/ong';
import { CreateOngDto } from '../dto/createOng.dto';
import { UpdateOngDto } from '../dto/updateOng.dto';

export interface OngServiceInterface {
  create(createOngDto: CreateOngDto): Promise<Ong>;
  findOne(id: string): Promise<Ong>;
  findAll(): Promise<Ong[]>;
  update(id: string, updateOngDto: UpdateOngDto): Promise<Ong>;
  remove(id: string);
}

export const ONG_SERVICE_INTERFACE = Symbol();
