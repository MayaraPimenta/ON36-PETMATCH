import { Address } from '../../common/Address';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('jsonb')
  address: Address;

  @Column('text')
  phone: string;

  // @OneToMany(() => Animal, (animal) => animal.ong)
  // animais: Animal[];
}
