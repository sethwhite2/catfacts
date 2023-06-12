import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Fact} from '../domain/models/fact';
import useFacts from '../hooks/useFacts';

interface FactItemProps {
  fact: Fact;
  onPress?: () => void;
}

const FactItem = ({fact, onPress}: FactItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={stylesheet.item}>{fact.fact}</Text>
    </TouchableOpacity>
  );
};

const FactList = ({navigation}) => {
  const {facts, doFetchFacts, doDeleteFacts} = useFacts();
  useEffect(() => {
    doDeleteFacts();
    setTimeout(() => {
      doFetchFacts();
    }, 2000);
  }, [doFetchFacts, doDeleteFacts]);
  return (
    <FlatList
      data={facts}
      renderItem={({item}) => (
        <FactItem
          fact={item}
          onPress={() => {
            navigation.navigate('Details', {factId: item.fact});
          }}
        />
      )}
    />
  );
};

const stylesheet = StyleSheet.create({
  item: {padding: 10, borderWidth: 1, marginHorizontal: 10},
});

export default FactList;
