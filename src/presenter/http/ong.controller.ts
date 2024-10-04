import { Controller, Post, Body, Inject } from '@nestjs/common';
import { CreateOngDto } from '../dto/createOng.dto';
import {
  ONG_SERVICE_INTERFACE,
  OngServiceInterface,
} from '../ports/ongService.interface';
// import { UpdateOngDto } from '../dto/update-ong.dto';

@Controller('ong')
export class OngController {
  constructor(
    @Inject(ONG_SERVICE_INTERFACE)
    private readonly ongService: OngServiceInterface,
  ) {}

  @Post()
  create(@Body() createOngDto: CreateOngDto) {
    return this.ongService.create(createOngDto);
  }

  // @Get()
  // findAll() {
  //   return this.ongService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.ongService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateOngDto: UpdateOngDto) {
  //   return this.ongService.update(+id, updateOngDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.ongService.remove(+id);
  // }
}
