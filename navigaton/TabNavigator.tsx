import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import StockScreen from '../screens/StockScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={24} style={styles.icon} />
          ),
        }}
      />
      <Tab.Screen 
        name="Stock" 
        component={StockScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="stats-chart" color={color} size={24} style={styles.icon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    borderRadius: 100,
    borderTopWidth: 0,
    position: 'absolute',
    bottom: 30,
    left: 10,
    right: 10,
    height: 70,
    paddingBottom: 10,
    },
});
