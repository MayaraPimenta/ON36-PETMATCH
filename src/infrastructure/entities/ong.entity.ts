import { Address } from '../../common/Address';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ong')
export class Ong {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('jsonb')
  address: Address;

  @Column('text')
  phone: string;

  @Column('text')
  cnpj: string;

  // @OneToMany(() => Animal, (animal) => animal.ong)
  // animais: Animal[];
}
