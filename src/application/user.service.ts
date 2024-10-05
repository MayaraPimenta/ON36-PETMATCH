import { Inject, Injectable } from '@nestjs/common';
import { User } from '../domain/user/user';
import { CreateUserDto } from '../presenter/dto/createUser.dto';
import { UserServiceInterface } from 'src/presenter/ports/userService.interface';
import {
  USER_REPOSITORY_INTERFACE,
  UserRepositoryInterface,
} from 'src/infrastructure/ports/userRepository.interface';

@Injectable()
export class UserService implements UserServiceInterface {
  constructor(
    @Inject(USER_REPOSITORY_INTERFACE)
    private readonly userRepositoryInterface: UserRepositoryInterface,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { name, address, phone } = createUserDto;
    const user = new User(name, address, phone);

    return await this.userRepositoryInterface.save(user);
  }
}
