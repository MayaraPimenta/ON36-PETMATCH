import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('address')
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  cep: string;

  @Column('text')
  street: string;

  @Column()
  number: number;

  @Column('text')
  neighborhood: string;

  @Column('text')
  city: string;

  @Column('text')
  state: string;

  @Column('text')
  country: string;
}
