import FactApiAdapter from '../../adapters/api/FactApiAdapter';
import FactRealmAdapter from '../../adapters/realm/FactRealmAdapter';

const fetchFacts = async (realm: Realm) => {
  const apiAdapter = new FactApiAdapter();
  const facts = await apiAdapter.fetchFacts();
  const realmAdapter = new FactRealmAdapter(realm);
  realmAdapter.saveFacts(facts);
};

export default fetchFacts;
