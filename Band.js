import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { bands } from './metal.js'

function Item({ band }) {
	return (
      <View style={styles.item}>
          <Text style={styles.title}>{band.name}</Text>
          <Text style={styles.text}>Origin: {band.origin}{"\n"}Fan Count: {band.fans}{"\n"}Formed: {band.formed}</Text>
      </View>
	)
}

function separator() {
  return (
    <View style={styles.separator} />
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
          ItemSeparatorComponent={separator}
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
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  text: {
    color: "white",
  },
  separator: {
    borderBottomColor: "white",
    borderBottomWidth: 1
  }
  });