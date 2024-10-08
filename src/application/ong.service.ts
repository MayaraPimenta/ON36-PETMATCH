import { Inject, Injectable } from '@nestjs/common';
import { CreateOngDto } from '../presenter/dto/createOng.dto';
import { UpdateOngDto } from '../presenter/dto/updateOng.dto';
import { Ong } from '../domain/ong/ong';
import { OngServiceInterface } from '../presenter/ports/ongService.interface';
import {
  ONG_REPOSITORY_INTERFACE,
  OngRepositoryInterface,
} from '../infrastructure/ports/ongRepository.interface';

@Injectable()
export class OngService implements OngServiceInterface {
  constructor(
    @Inject(ONG_REPOSITORY_INTERFACE)
    private readonly ongRepositoryInterface: OngRepositoryInterface,
  ) {}

  async create(createOngDto: CreateOngDto): Promise<Ong> {
    const { name, address, phone, cnpj } = createOngDto;
    const ong = new Ong(name, address, phone, cnpj);

    return await this.ongRepositoryInterface.save(ong);
  }

  async findAll(): Promise<Ong[]> {
    return await this.ongRepositoryInterface.findAll();
  }

  async findOne(id: string): Promise<Ong> {
    return await this.ongRepositoryInterface.findOne(id);
  }

  async update(id: string, updateOngDto: UpdateOngDto): Promise<Ong> {
    const { name, address, phone, cnpj } = updateOngDto;
    const ong = new Ong(name, address, phone, cnpj);

    return await this.ongRepositoryInterface.update(id, ong);
  }

  async remove(id: string) {
    return await this.ongRepositoryInterface.remove(id);
  }
}
