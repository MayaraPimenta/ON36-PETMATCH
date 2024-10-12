import { Inject, Injectable } from '@nestjs/common';
import { User } from '../domain/user/user';
import { CreateUserDto } from '../presenter/dto/createUser.dto';
import { UserServiceInterface } from '../presenter/ports/userService.interface';
import {
  USER_REPOSITORY_INTERFACE,
  UserRepositoryInterface,
} from '../infrastructure/ports/userRepository.interface';
import { UpdateUserDto } from '../presenter/dto/updateUser.dto';

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

  async findAll(): Promise<User[]> {
    return await this.userRepositoryInterface.findAll();
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepositoryInterface.findOne(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const { name, address, phone } = updateUserDto;
    const user = new User(name, address, phone);

    return await this.userRepositoryInterface.update(id, user);
  }

  async remove(id: string) {
    return await this.userRepositoryInterface.remove(id);
  }
}
