import {useCallback} from 'react';
import {Fact} from '../domain/models/fact';
import fetchFacts from '../domain/usecases/fetchFacts';
import RealmContext from '../adapters/realm/context';
import deleteFacts from '../domain/usecases/deleteFacts';

const useFacts = () => {
  const {useRealm, useQuery} = RealmContext;
  const realm = useRealm();
  const facts = useQuery(Fact);

  const doFetchFacts = useCallback(() => {
    fetchFacts(realm);
  }, [realm]);

  const doDeleteFacts = useCallback(() => {
    deleteFacts(realm);
  }, [realm]);

  return {
    facts,
    doFetchFacts,
    doDeleteFacts,
  };
};

export default useFacts;
