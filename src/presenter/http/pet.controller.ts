import {
  Controller,
  Post,
  Body,
  Inject,
  Get,
  Param,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { CreatePetDto } from '../dto/createPet.dto';
import {
  PET_SERVICE_INTERFACE,
  PetServiceInterface,
} from '../ports/petService.interface';
import { UpdatePetDto } from '../dto/updatePet.dto';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('pet')
@ApiTags('Pet')
export class PetController {
  constructor(
    @Inject(PET_SERVICE_INTERFACE)
    private readonly petService: PetServiceInterface,
  ) {}

  //autorização: admin e ong
  @Post()
  @ApiOperation({ summary: 'Cria um animal' })
  create(@Body() createPetDto: CreatePetDto) {
    return this.petService.create(createPetDto);
  }

  //autorização: admin
  @Get()
  @ApiOperation({ summary: 'Busca todos os animais cadastrados' })
  findAll() {
    return this.petService.findAll();
  }

  //autorização: todos
  @Get('search')
  @ApiOperation({
    summary:
      'Busca por query, exemplo: estado=ES&species=cachorro&size=pequeno&age=filhote',
  })
  @ApiQuery({
    name: 'state',
    required: false,
    description: 'Estado onde mora',
    example: 'ES (use a sigla de um estado brasileiro)',
  })
  @ApiQuery({
    name: 'size',
    required: false,
    description: 'Porte do animal',
    example: 'Pequeno, Médio ou Grande porte',
  })
  @ApiQuery({
    name: 'age',
    required: false,
    description: 'Idade do animal',
    example: 'Filhote, adulto ou idoso',
  })
  @ApiQuery({
    name: 'species',
    required: false,
    description: 'Especie do animal',
    example: 'Gato ou cachorro',
  })
  findPetsByQuery(@Query() query: any) {
    return this.petService.findPetsByQuery(query);
  }

  //autorização: todos
  @Get('attributes')
  @ApiOperation({ summary: 'Busca atributos dos animais' })
  getAttributes() {
    return this.petService.getAttributes();
  }

  //autorização: admin e ong
  @Get('ong/:ongId')
  @ApiOperation({ summary: 'Busca animais por ong' })
  getPetsByOng(@Param('ongId') ongId: string) {
    return this.petService.getPetsByOng(ongId);
  }

  //autorização: admin e ong
  @Get('user/:userId')
  @ApiOperation({ summary: 'Busca animais por usuário' })
  getPetsByUser(@Param('userId') userId: string) {
    return this.petService.getPetsByUser(userId);
  }

  //autorização: admin e ong
  @Get(':id')
  @ApiOperation({ summary: 'Busca animais por id' })
  findOne(@Param('id') id: string) {
    return this.petService.findOne(id);
  }

  //autorização: admin e ong
  @Put(':id')
  @ApiOperation({ summary: 'Altera um ou mais atributos de um animal' })
  update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    return this.petService.update(id, updatePetDto);
  }

  //autorização: admin e ong
  @Delete(':id')
  @ApiOperation({ summary: 'Apaga um animal da lista' })
  remove(@Param('id') id: string) {
    return this.petService.remove(id);
  }
}
