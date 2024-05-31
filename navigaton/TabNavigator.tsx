import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import StockScreen from '../screens/StockScreen';
import { SFSymbol } from "react-native-sfsymbols";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'rgba(0, 0, 0, 0.25)',
          borderRadius: 100,
          borderTopWidth: 0,
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          height: 70,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        
      />
      <Tab.Screen name="Stock" component={StockScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 100,
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    height: 70,
  },
});