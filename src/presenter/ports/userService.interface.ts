import { User } from '../../domain/user/user';
import { CreateUserDto } from '../dto/createUser.dto';

export interface UserServiceInterface {
  create(createUserDto: CreateUserDto): Promise<User>;
}

export const USER_SERVICE_INTERFACE = Symbol();
