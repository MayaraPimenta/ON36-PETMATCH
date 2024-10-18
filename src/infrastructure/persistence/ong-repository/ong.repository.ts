import { Injectable, NotFoundException } from '@nestjs/common';
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

  async save(ong: Ong): Promise<Ong> {
    try {
      const response = await this.ongRepository.save(ong);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<Ong[]> {
    try {
      const response = await this.ongRepository.find();
      return response;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string): Promise<Ong> {
    try {
      const entity = await this.ongRepository.findOneBy({ id: id });

      if (!entity) {
        throw new NotFoundException('Ong não encontrada!');
      }

      const response = this.ongRepository.findOne({
        where: { id },
        relations: ['address'],
      });

      return response;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, ong: Ong): Promise<Ong> {
    try {
      const entity = await this.ongRepository.findOneBy({ id: id });

      if (!entity) {
        throw new NotFoundException('Ong não encontrada');
      }

      Object.assign(entity, ong);
      return this.ongRepository.save(entity);
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const entity = await this.ongRepository.findOneBy({ id: id });

      if (!entity) {
        throw new NotFoundException('Ong não encontrada');
      }

      const response = await this.ongRepository.delete({ id: id });
      return response;
    } catch (error) {
      throw error;
    }
  }
}
