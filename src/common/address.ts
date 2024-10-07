import { States } from './states';

export type Address = {
  cep: string;
  street: string;
  number: number;
  neighborhood: string;
  city: string;
  state: States;
  country: 'Brasil';
};
