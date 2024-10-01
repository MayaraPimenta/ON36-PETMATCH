import { Endereco } from '../../common/Endereco';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ong')
export class Ong {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  nome: string;

  @Column('jsonb')
  endereco: Endereco;

  @Column('text')
  telefone: string;

  @Column('text')
  cnpj: string;

  // @OneToMany(() => Animal, (animal) => animal.ong)
  // animais: Animal[];
}
