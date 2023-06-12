import {FactInterface} from '../../domain/models/fact';
import {FactsFromApi} from './schema';

export const formatFacts = (factsFromApi: FactsFromApi): FactInterface[] => {
  return factsFromApi.data.map(f => {
    return {fact: f.fact, length: f.length, date: new Date()};
  });
};
