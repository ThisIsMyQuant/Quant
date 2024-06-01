import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Square = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.symbol}>▲AAPL</Text>
      <Text style={styles.price}>190.8</Text>
      <Text style={styles.details}>3.01T +4.20%</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    height: 180,
    width: 180,
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
    color: 'green',
  },
});

export default Square;
