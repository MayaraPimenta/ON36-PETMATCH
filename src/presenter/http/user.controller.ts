import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/createUser.dto';
import {
  USER_SERVICE_INTERFACE,
  UserServiceInterface,
} from '../ports/userService.interface';

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
}
