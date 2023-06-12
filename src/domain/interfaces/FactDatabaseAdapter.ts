import {FactInterface} from '../models/fact';

interface FactDatabaseAdapter {
  getFacts(): Promise<FactInterface[]>;
  saveFacts(facts: FactInterface[]): void;
  deleteFacts(): void;
}

export default FactDatabaseAdapter;
