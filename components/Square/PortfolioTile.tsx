import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';

const PortfolioTile = () => {
  return (
    <TouchableOpacity style={styles.container}>
        <BlurView 
          style={styles.blurView} 
          blurType="dark"  // Use 'blurType' instead of 'tint' and 'intensity'
          blurAmount={10}  // Adjust blur amount as needed
        >
          <View style={styles.contentContainer}>
            <Text style={styles.symbol}>▲AAPL</Text>
            <Text style={styles.price}>190.8</Text>
            <Text style={styles.details}>3.01T +4.20%</Text>
          </View>
        </BlurView>
    </TouchableOpacity>
  );
};

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
      borderRadius: 100,
      borderWidth: 1, // Thin border to simulate the inset shadow
      borderColor: 'rgba(255, 255, 255, 0.2)', // Soft white for the border
      shadowColor: 'white', // Color of the shadow
      shadowOffset: { width: 0, height: 0 }, // Position of the shadow
      shadowOpacity: 1, // Full color strength
      shadowRadius: 3, // How far the shadow spreads
      elevation: 1,
    },
    blurWrapper: {
      flex: 1,
      borderRadius: 100,
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
  

export default PortfolioTile;
