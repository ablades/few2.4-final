import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, SafeAreaView, FlatList } from 'react-native';
import { bands } from './metal.js'

function Item({ band }) {
	return (
      <View style={styles.item}>
          <Text style={styles.text}>{band.name} {band.origin} {band.fans} {band.formed}</Text>
      </View>
	)
}

export default function Band() {
  return (
    <SafeAreaView style={styles.container}>
        <FlatList
          data={bands}
          renderItem={({ item }) => {
            return <Item band={ item } />
          }}
          keyExtractor={item => item.name}
          style={styles.listContainer}
        />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  listContainer: {
    width: "100%",
  },
  item: {
    color: "white",
    backgroundColor: "black",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    color: "white",
  }
  });