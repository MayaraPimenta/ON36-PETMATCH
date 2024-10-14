import { Ong } from '../../domain/ong/ong';

export interface OngRepositoryInterface {
  save(ong: Ong): Promise<Ong>;
  findAll(): Promise<Ong[]>;
  findOne(id: string): Promise<Ong>;
  update(id: string, ong: Ong): Promise<Ong>;
  remove(id: string);
}

export const ONG_REPOSITORY_INTERFACE = Symbol();
