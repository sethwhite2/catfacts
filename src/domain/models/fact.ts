import {FactSchema} from '../../adapters/realm/schema';

export interface FactInterface {
  fact: string;
  length: number;
  date: Date;
}

export class Fact extends Realm.Object<Fact> implements FactInterface {
  fact!: string;
  length!: number;
  date!: Date;

  static schema = FactSchema;
}
