import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';

const StockTile = () => {
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
  container: {
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    height: 180,
    width: 180,
    overflow: 'hidden',  // This ensures the BlurView respects the borderRadius
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',  // Ensures the content uses the full height of the blur view
    width: '100%',  // Ensures the content uses the full width of the blur view
  },
  symbol: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  price: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  details: {
    fontSize: 24,
    color: '#37c73d',
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(10, 10, 10, 0.25)',
  },
});

export default StockTile;
