import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { bands } from './metal.js'

export default function Stats() {
  const totalBands = bands.length

  const totalFans = bands.reduce((acc, band) => {
    acc = acc + (band.fans * 1000)
    return acc
  }, 0)


  const countries = bands.filter((band) => {
    return band.origin
  })

  const unquie_countries = countries.filter((country, index) => countries.indexOf(country) === index)

  const active_bands = bands.filter((band) => {
    return band.split === "-"
  })

  const inactive_bands = bands.filter((band) => {
    return band.split !== "-"
  })

  return(
    <SafeAreaView>
        <ScrollView>
            <Text>
                Count: {totalBands}
            </Text>
            <Text>
                Fans: {totalFans}
            </Text>
            <Text>
                Countries: {unquie_countries.length}
            </Text>
            <Text>
                Active: {active_bands.length}
            </Text>
            <Text>
                Split: {inactive_bands.length}
            </Text>
        </ScrollView>

    </SafeAreaView>
)}