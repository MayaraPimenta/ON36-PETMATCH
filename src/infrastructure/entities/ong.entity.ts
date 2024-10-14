import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from './address.entity';
import { Pet } from './pet.entity';

@Entity('ong')
export class Ong {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  phone: string;

  @Column('text')
  cnpj: string;

  @OneToOne(() => Address, {
    cascade: true,
  })
  @JoinColumn()
  address: Address;

  @OneToMany(() => Pet, (pet) => pet.ong, { nullable: true })
  pets: Pet[];
}
