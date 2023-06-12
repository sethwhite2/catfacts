import {Fact} from '../models/fact';

export default interface FactRemoteAdapter {
  fetchFacts(): Promise<Fact[]>;
}
