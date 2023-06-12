import {Fact} from '../domain/models/fact';
import RealmContext from '../adapters/realm/context';

const useFacts = (factId: string) => {
  const {useObject} = RealmContext;
  return useObject(Fact, factId);
};

export default useFacts;
