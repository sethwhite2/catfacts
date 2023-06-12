import {useCallback, useEffect, useState} from 'react';
import getFacts from '../domain/usecases/getFacts';
import {Fact} from '../domain/models/fact';
import fetchFacts from '../domain/usecases/fetchFacts';
import RealmContext from '../adapters/realm/context';
import deleteFacts from '../domain/usecases/deleteFacts';

const useFacts = () => {
  const {useRealm} = RealmContext;
  const realm = useRealm();
  const [facts, setFacts] = useState<Fact[]>([]);

  const doFetchFacts = useCallback(() => {
    fetchFacts(realm);
  }, [realm]);

  const doDeleteFacts = useCallback(() => {
    deleteFacts(realm);
  }, [realm]);

  useEffect(() => {
    getFacts(realm).then(factList => setFacts(factList));
  }, [realm]);

  return {
    facts,
    doFetchFacts,
    doDeleteFacts,
  };
};

export default useFacts;
