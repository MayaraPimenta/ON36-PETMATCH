import { Ong } from '../../domain/ong/ong';
import { CreateOngDto } from '../dto/createOng.dto';

export interface OngServiceInterface {
  criar(createOngDto: CreateOngDto): Promise<Ong>;
}

export const ONG_SERVICE_INTERFACE = Symbol();
