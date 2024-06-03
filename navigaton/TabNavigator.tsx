import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import StockScreen from '../screens/StockScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { BlurView } from 'expo-blur';

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
        tabBarBackground: () => (
          <View style={styles.blurWrapper}>
            <BlurView style={styles.blurView} intensity={100} tint="dark" />
          </View>
        ),
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            <Icon 
              name="home" 
              color={color} 
              size={24} 
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Stock" 
        component={StockScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon 
              name="stats-chart" 
              color={color} 
              size={24} 
              style={styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    padding: 10,
  },
  tabBar: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 30,
    left: 10,
    right: 10,
    height: 50,
    paddingBottom: 10,
    borderTopWidth: 0,  // Ensure no border is applied at the top
    shadowOpacity: 0,    // Remove shadow if any
    elevation: 0,         // Remove elevation shadow for Android
  },  
  blurWrapper: {
    flex: 1,
    borderRadius: 100, // Set the borderRadius here
    overflow: 'hidden',
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
