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

@Controller('pet')
export class PetController {
  constructor(
    @Inject(PET_SERVICE_INTERFACE)
    private readonly petService: PetServiceInterface,
  ) {}

  @Post()
  create(@Body() createPetDto: CreatePetDto) {
    return this.petService.create(createPetDto);
  }

  @Get()
  findAll() {
    return this.petService.findAll();
  }

  @Get('search')
  findPetsByQuery(@Query() query: any) {
    return this.petService.findPetsByQuery(query);
  }

  @Get('attributes')
  getAttributes() {
    return this.petService.getAttributes();
  }

  @Get('ong/:ongId')
  getPetsByOng(@Param('ongId') ongId: string) {
    return this.petService.getPetsByOng(ongId);
  }

  @Get('user/:userId')
  getPetsByUser(@Param('userId') userId: string) {
    return this.petService.getPetsByUser(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    return this.petService.update(id, updatePetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petService.remove(id);
  }
}
