import { Injectable } from '@nestjs/common';
import { Ong } from '../../../domain/ong/ong';
import { Repository } from 'typeorm';
import { OngRepositoryInterface } from '../../../infrastructure/ports/ongRepository.interface';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OngRepository implements OngRepositoryInterface {
  constructor(
    @InjectRepository(Ong)
    private ongRepository: Repository<Ong>,
  ) {}

  async salvar(ong: Ong): Promise<Ong> {
    try {
      const response = await this.ongRepository.save(ong);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
