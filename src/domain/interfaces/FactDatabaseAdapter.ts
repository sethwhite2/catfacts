import {Fact} from '../models/fact';

interface FactDatabaseAdapter {
  getFacts(): Promise<Fact[]>;
  saveFacts(facts: Fact[]): void;
  deleteFacts(): void;
}

export default FactDatabaseAdapter;
