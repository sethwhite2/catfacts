import {Fact} from '../../domain/models/fact';
import FactRemoteAdapter from '../../domain/interfaces/FactRemoteAdapter';
import {formatFacts} from './formatters';
import {FactsFromApi} from './schema';

class FactApiAdapter implements FactRemoteAdapter {
  fetchFacts = async (): Promise<Fact[]> => {
    return fetch('https://catfact.ninja/facts/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        const apiFacts = data as unknown as FactsFromApi;
        return formatFacts(apiFacts);
      });
  };
}

export default FactApiAdapter;
