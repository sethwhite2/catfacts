import FactRemoteAdapter, {
  FetchFactsResult,
} from '../../domain/interfaces/FactRemoteAdapter';
import {formatFacts} from './formatters';
import {FactsFromApi} from './schema';

class FactApiAdapter implements FactRemoteAdapter {
  fetchFacts = async (
    url: string = 'https://catfact.ninja/facts/',
  ): Promise<FetchFactsResult> => {
    return fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        const apiFacts = data as unknown as FactsFromApi;
        return {
          facts: formatFacts(apiFacts),
          nextUrl: apiFacts.next_page_url,
        };
      });
  };
}

export default FactApiAdapter;
