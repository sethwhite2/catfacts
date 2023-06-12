import FactRealmAdapter from '../../adapters/realm/FactRealmAdapter';

const deleteFacts = async (realm: Realm) => {
  const realmAdapter = new FactRealmAdapter(realm);
  await realmAdapter.deleteFacts();
  console.warn('Facts deleted');
};

export default deleteFacts;
