import {createRealmContext} from '@realm/react';
import Realm from 'realm';
import {Fact} from '../../domain/models/fact';

const realmConfig: Realm.Configuration = {
  schema: [Fact],
  deleteRealmIfMigrationNeeded: true,
  schemaVersion: 1,
};

export default createRealmContext(realmConfig);
