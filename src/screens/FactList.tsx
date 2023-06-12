import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {Fact} from '../domain/models/fact';
import useFacts from '../hooks/useFacts';

interface FactItemProps {
  fact: Fact;
}

const FactItem = ({fact}: FactItemProps) => {
  return <Text style={stylesheet.item}>{fact.fact}</Text>;
};

const FactList = () => {
  const {facts, doFetchFacts, doDeleteFacts} = useFacts();
  useEffect(() => {
    doDeleteFacts();
    setTimeout(() => {
      doFetchFacts();
    }, 2000);
  }, [doFetchFacts, doDeleteFacts]);
  return (
    <FlatList data={facts} renderItem={({item}) => <FactItem fact={item} />} />
  );
};

const stylesheet = StyleSheet.create({
  item: {padding: 10, borderWidth: 1, marginHorizontal: 10},
});

export default FactList;
