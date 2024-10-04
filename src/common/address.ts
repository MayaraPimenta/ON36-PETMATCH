import { States } from './states';

export type Address = {
  street: string;
  number: number;
  neighborhood: string;
  city: string;
  state: States;
  country: 'Brasil';
};
