import {
  Controller,
  Post,
  Body,
  Inject,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateOngDto } from '../dto/createOng.dto';
import {
  ONG_SERVICE_INTERFACE,
  OngServiceInterface,
} from '../ports/ongService.interface';
import { UpdateOngDto } from '../dto/updateOng.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('ong')
@ApiTags('Ong')
export class OngController {
  constructor(
    @Inject(ONG_SERVICE_INTERFACE)
    private readonly ongService: OngServiceInterface,
  ) {}

  //autorização: admin e ong
  @Post()
  @ApiOperation({ summary: 'Cria uma ONG' })
  create(@Body() createOngDto: CreateOngDto) {
    return this.ongService.create(createOngDto);
  }

  //autorização: admin
  @Get()
  @ApiOperation({ summary: 'Busca todas as ONGs criadas' })
  findAll() {
    return this.ongService.findAll();
  }

  //autorização: admin e ong
  @Get(':id')
  @ApiOperation({ summary: 'Busca uma ONG pelo id enviado' })
  findOne(@Param('id') id: string) {
    return this.ongService.findOne(id);
  }

  //autorização: admin e ong
  @Put(':id')
  @ApiOperation({ summary: 'Altera um ou mais atributos de uma ONG' })
  update(@Param('id') id: string, @Body() updateOngDto: UpdateOngDto) {
    return this.ongService.update(id, updateOngDto);
  }

  //autorização: admin e ong
  @Delete(':id')
  @ApiOperation({ summary: 'Apaga uma ONG da lista' })
  remove(@Param('id') id: string) {
    return this.ongService.remove(id);
  }
}
