import {Fact} from '../../domain/models/fact';
import FactDatabaseAdapter from '../../domain/interfaces/FactDatabaseAdapter';

class FactRealmAdapter implements FactDatabaseAdapter {
  realm: Realm;

  constructor(realm: Realm) {
    this.realm = realm;
  }

  getFacts = async (): Promise<Fact[]> => {
    const facts = this.realm.objects<Fact>('Fact');
    return facts as unknown as Fact[];
  };

  saveFacts = async (facts: Fact[]) => {
    this.realm.write(() => {
      facts.forEach(fact => {
        this.realm.create('Fact', {...fact}, Realm.UpdateMode.Modified);
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
