import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Olá, bem-vindo(a) a API PetMatch!';
  }
}
