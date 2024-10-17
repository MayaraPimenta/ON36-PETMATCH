import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/createUser.dto';
import {
  USER_SERVICE_INTERFACE,
  UserServiceInterface,
} from '../ports/userService.interface';
import { UpdateOngDto } from '../dto/updateOng.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(
    @Inject(USER_SERVICE_INTERFACE)
    private readonly userService: UserServiceInterface,
  ) {}

  //autorização: admin e usuairo
  @Post()
  @ApiOperation({ summary: 'Cria um usuário' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  //autorização: admin
  @Get()
  @ApiOperation({ summary: 'Busca todos os usuarios' })
  findAll() {
    return this.userService.findAll();
  }

  //autorização: admin e usuario
  @Get(':id')
  @ApiOperation({ summary: 'Busca usuário' })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  //autorização: admin e usuario
  @Put(':id')
  @ApiOperation({ summary: 'Altera um ou mais atributos de um usuário' })
  update(@Param('id') id: string, @Body() updateOngDto: UpdateOngDto) {
    return this.userService.update(id, updateOngDto);
  }

  //autorização: admin e usuario
  @Delete(':id')
  @ApiOperation({ summary: 'Apaga um usuário' })
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
