import React from 'react';
import {SafeAreaView} from 'react-native';
import FactList from './src/screens/FactList';
import RealmContext from './src/adapters/realm/context';

const App = () => {
  const {RealmProvider} = RealmContext;
  return (
    <RealmProvider>
      <SafeAreaView>
        <FactList />
      </SafeAreaView>
    </RealmProvider>
  );
};

export default App;
