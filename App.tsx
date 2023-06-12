import React from 'react';
import {SafeAreaView} from 'react-native';
import FactList from './src/screens/FactList';
import RealmContext from './src/adapters/realm/context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FactDetails from './src/screens/FactDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  const {RealmProvider} = RealmContext;
  return (
    <NavigationContainer>
      <RealmProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={FactList} />
          <Stack.Screen name="Details" component={FactDetails} />
        </Stack.Navigator>
      </RealmProvider>
    </NavigationContainer>
  );
};

export default App;
