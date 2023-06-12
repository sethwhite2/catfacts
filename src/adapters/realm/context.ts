import {createRealmContext} from '@realm/react';
import Realm from 'realm';
import {FactSchema} from './schema';

const realmConfig: Realm.Configuration = {
  schema: [FactSchema],
  schemaVersion: 1,
};

export default createRealmContext(realmConfig);
