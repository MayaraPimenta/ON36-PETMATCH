import { DataSource } from 'typeorm';
import { Ong } from '../../entities/ong.entity';
import { DATA_SOURCE, ONG_REPOSITORY } from '../../../common/constants';

export const ongProviders = [
  {
    provide: ONG_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Ong),
    inject: [DATA_SOURCE],
  },
];
