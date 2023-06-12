import FactApiAdapter from '../../adapters/api/FactApiAdapter';
import FactRealmAdapter from '../../adapters/realm/FactRealmAdapter';

const fetchFacts = async (realm: Realm) => {
  const apiAdapter = new FactApiAdapter();
  let result = await apiAdapter.fetchFacts();
  const realmAdapter = new FactRealmAdapter(realm);
  realmAdapter.saveFacts(result.facts);
  let nextUrl = result.nextUrl;
  while (nextUrl) {
    result = await apiAdapter.fetchFacts(nextUrl);
    realmAdapter.saveFacts(result.facts);
    nextUrl = result.nextUrl;
  }
};

export default fetchFacts;
