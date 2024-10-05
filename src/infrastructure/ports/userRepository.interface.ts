import { User } from '../../domain/user/user';

export interface UserRepositoryInterface {
  save(user: User): Promise<User>;
}

export const USER_REPOSITORY_INTERFACE = Symbol();
