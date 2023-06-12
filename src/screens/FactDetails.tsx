import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import useFact from '../hooks/useFact';

const FactDetails = ({navigation, route}) => {
  const fact = useFact(route.params.factId)!;
  return (
    <SafeAreaView>
      <Text>{fact.fact}</Text>
      <Text>{fact.length}</Text>
      <Text>{fact.date.toString()}</Text>
    </SafeAreaView>
  );
};

export default FactDetails;
