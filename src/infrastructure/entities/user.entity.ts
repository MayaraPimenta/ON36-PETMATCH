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

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  phone: string;

  @OneToOne(() => Address, {
    cascade: true,
  })
  @JoinColumn()
  address: Address;

  @OneToMany(() => Pet, (pet) => pet.user, { nullable: true })
  pets: Pet[];
}
