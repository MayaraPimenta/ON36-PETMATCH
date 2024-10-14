import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '../../presenter/http/user.controller';
import { USER_SERVICE_INTERFACE } from '../../presenter/ports/userService.interface';
import { UserService } from '../../application/user.service';
import { UserRepository } from '../../infrastructure/persistence/user-repository/user.repository';
import { USER_REPOSITORY_INTERFACE } from '../../infrastructure/ports/userRepository.interface';
import { User } from '../../infrastructure/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    {
      provide: USER_SERVICE_INTERFACE,
      useClass: UserService,
    },
    {
      provide: USER_REPOSITORY_INTERFACE,
      useClass: UserRepository,
    },
    UserRepository,
  ],
  exports: [UserRepository],
})
export class UserModule {}
