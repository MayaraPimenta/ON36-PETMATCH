import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findAll(): Promise<User[]> {
    try {
      const response = await this.userRepository.find();
      return response;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string): Promise<User> {
    try {
      const entity = await this.userRepository.findOneBy({ id: id });

      if (!entity) {
        throw new NotFoundException('Usuário(a) não encontrado(a)');
      }

      const response = this.userRepository.findOne({
        where: { id },
        relations: ['address'],
      });

      return response;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, user: User): Promise<User> {
    try {
      const entity = await this.userRepository.findOneBy({ id: id });

      if (!entity) {
        throw new NotFoundException('Usuário(a) não encontrado(a)');
      }

      Object.assign(entity, user);
      return this.userRepository.save(entity);
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const entity = await this.userRepository.findOneBy({ id: id });

      if (!entity) {
        throw new NotFoundException('Usuário(a) não encontrado(a)');
      }

      const response = await this.userRepository.delete({ id: id });
      return response;
    } catch (error) {
      throw error;
    }
  }
}
