import { Inject, Injectable } from '@nestjs/common';
import { CreateOngDto } from '../presenter/dto/createOng.dto';
// import { UpdateOngDto } from '../presenter/dto/update-ong.dto';
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

  async criar(createOngDto: CreateOngDto): Promise<Ong> {
    const { nome, endereco, telefone, cnpj } = createOngDto;
    const ong = new Ong(nome, endereco, telefone, cnpj);

    return await this.ongRepositoryInterface.salvar(ong);
  }

  // findAll() {
  //   return `This action returns all ong`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} ong`;
  // }

  // update(id: number, updateOngDto: UpdateOngDto) {
  //   return `This action updates a #${id} ong`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} ong`;
  // }
}
