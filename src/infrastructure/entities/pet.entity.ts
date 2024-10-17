import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Ong } from './ong.entity';
import { User } from './user.entity';

@Entity('pet')
export class Pet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  species: string;

  @Column({ nullable: true })
  size: string;

  @Column()
  vaccinated: boolean;

  @Column()
  neutered: boolean;

  @Column()
  age: number;

  @ManyToOne(() => Ong, (ong) => ong.pets)
  ong: Ong;

  @Column()
  ongId: string;

  @ManyToOne(() => User, (user) => user.pets, { nullable: true })
  user: User;
}
