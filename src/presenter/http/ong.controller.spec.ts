import { Test, TestingModule } from '@nestjs/testing';
import { OngController } from '../../presenter/http/ong.controller';
import { ONG_SERVICE_INTERFACE } from '../ports/ongService.interface';
import { ONG_REPOSITORY_INTERFACE } from '../../infrastructure/ports/ongRepository.interface';
import { CreateOngDto } from '../dto/createOng.dto';
import { States } from '../../common/states';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';

describe('OngController', () => {
  let app: INestApplication;
  let controller: OngController;
  let ongServiceMock: any;
  let ongRepositoryMock: any;
  const createOngDto: CreateOngDto = {
    name: 'Ong Teste 0',
    address: {
      street: 'rua',
      number: 111,
      neighborhood: 'bairro',
      city: 'cidade',
      state: States.ES,
      country: 'Brasil',
    },
    phone: '99998888',
    cnpj: '12345678912346',
  };

  beforeEach(async () => {
    ongRepositoryMock = {
      save: jest.fn(),
    };

    ongServiceMock = {
      create: jest.fn().mockImplementation((createOngDto) => ({
        id: 'unique-id',
        ...createOngDto,
      })),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [OngController],
      providers: [
        {
          provide: ONG_SERVICE_INTERFACE,
          useValue: ongServiceMock, // Usando o mock do serviço
        },
        {
          provide: ONG_REPOSITORY_INTERFACE,
          useValue: ongRepositoryMock, // Usando o mock do repositório
        },
      ],
    }).compile();

    app = module.createNestApplication();
    await app.init();

    // eslint-disable-next-line prefer-const
    controller = module.get<OngController>(OngController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return status 201', () => {
    return request(app.getHttpServer())
      .post('/ong')
      .send(createOngDto)
      .expect(201);
  });

  it('should return a defined id', () => {
    return request(app.getHttpServer())
      .post('/ong')
      .send(createOngDto)
      .expect((res) => {
        expect(res.body.id).toBeDefined();
      });
  });

  it('should return a response body similar to payload', () => {
    return request(app.getHttpServer())
      .post('/ong')
      .send(createOngDto)
      .expect((res) => {
        expect(res.body.name).toStrictEqual(createOngDto.name);
        expect(res.body.address).toStrictEqual(createOngDto.address);
        expect(res.body.phone).toStrictEqual(createOngDto.phone);
        expect(res.body.cnpj).toStrictEqual(createOngDto.cnpj);
      });
  });
});
