import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepositoryInterface } from '../../ports/userRepository.interface';
import { User } from '../../../domain/user/user';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository implements UserRepositoryInterface {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async save(user: User): Promise<User> {
    try {
      const response = await this.userRepository.save(user);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
