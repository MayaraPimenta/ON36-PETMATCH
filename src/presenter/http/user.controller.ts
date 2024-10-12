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

@Controller('user')
export class UserController {
  constructor(
    @Inject(USER_SERVICE_INTERFACE)
    private readonly ongService: UserServiceInterface,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.ongService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.ongService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ongService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateOngDto: UpdateOngDto) {
    return this.ongService.update(id, updateOngDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ongService.remove(id);
  }
}
