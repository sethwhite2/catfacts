import FactRealmAdapter from '../../adapters/realm/FactRealmAdapter';

const getFacts = (realm: Realm) => {
  const realmAdapter = new FactRealmAdapter(realm);
  return realmAdapter.getFacts();
};

export default getFacts;
