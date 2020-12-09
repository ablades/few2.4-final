import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Band from './Band'
import Stats from './Stats'

const Tab = createBottomTabNavigator();

function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Band View') {
                iconName = focused ? "guitar-pick" : "guitar-pick-outline"
                return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
              }

              if (route.name === 'Stats View') {
                iconName = focused ? "chart-areaspline-variant" : "chart-areaspline"
                return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: "red",
            inactiveTintColor: "#CC8B86",
              style: {
                backgroundColor: "#000",
              }
          }}
    
        >
          <Tab.Screen name="Band View" component={Band}/>
          <Tab.Screen name="Stats View" component={Stats} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App