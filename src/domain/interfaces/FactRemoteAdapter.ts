import {FactInterface} from '../models/fact';

export interface FetchFactsResult {
  facts: FactInterface[];
  nextUrl: string | null;
}

interface FactRemoteAdapter {
  fetchFacts(url?: string): Promise<FetchFactsResult>;
}

export default FactRemoteAdapter;
