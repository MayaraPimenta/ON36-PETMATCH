import { User } from '../../domain/user/user';

export interface UserRepositoryInterface {
  save(user: User): Promise<User>;
  findAll(): Promise<User[]>;
  findOne(id: string): Promise<User>;
  update(id: string, ong: User): Promise<User>;
  remove(id: string);
}

export const USER_REPOSITORY_INTERFACE = Symbol();
