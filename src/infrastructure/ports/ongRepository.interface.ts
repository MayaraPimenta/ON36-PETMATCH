import { Ong } from '../../domain/ong/ong';

export interface OngRepositoryInterface {
  save(ong: Ong): Promise<Ong>;
}

export const ONG_REPOSITORY_INTERFACE = Symbol();
