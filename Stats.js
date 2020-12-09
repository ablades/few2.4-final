import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { bands } from './metal.js'

function Item({ title }) {
	return (
		<View>
		<Text>{title}</Text>
		</View>
	);
}


export default function Stats() {
  return (
    <SafeAreaView>
        <FlatList
          data={bands}
          renderItem={({ item, index }) => {
            return <Item title={`${index} ${item.breed}`} />
          }}
          keyExtractor={item => item.breed}
        />
    </SafeAreaView>
  );
}