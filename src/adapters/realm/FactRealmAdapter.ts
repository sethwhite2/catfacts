import {Fact, FactInterface} from '../../domain/models/fact';
import FactDatabaseAdapter from '../../domain/interfaces/FactDatabaseAdapter';

class FactRealmAdapter implements FactDatabaseAdapter {
  realm: Realm;

  constructor(realm: Realm) {
    this.realm = realm;
  }

  getFacts = async (): Promise<FactInterface[]> => {
    return this.realm.objects<Fact>(Fact.schema.name).flat();
  };

  saveFacts = async (facts: FactInterface[]) => {
    this.realm.write(() => {
      facts.forEach(fact => {
        this.realm.create(
          Fact.schema.name,
          {...fact},
          Realm.UpdateMode.Modified,
        );
      });
    });
  };

  deleteFacts = async () => {
    this.realm.write(() => {
      this.realm.deleteAll();
    });
  };
}

export default FactRealmAdapter;
