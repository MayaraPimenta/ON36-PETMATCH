import { User } from '../../domain/user/user';
import { CreateUserDto } from '../dto/createUser.dto';
import { UpdateUserDto } from '../dto/updateUser.dto';

export interface UserServiceInterface {
  create(createUserDto: CreateUserDto): Promise<User>;
  findAll(): Promise<User[]>;
  findOne(id: string): Promise<User>;
  update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
  remove(id: string);
}

export const USER_SERVICE_INTERFACE = Symbol();
