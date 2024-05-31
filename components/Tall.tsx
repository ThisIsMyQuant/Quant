import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Square = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Top Movers</Text>
      <View style={styles.mover}>
        <View style={styles.symbolContainer}>
          <Text style={styles.upSymbol}>▲</Text>
          <Text style={styles.symbolText}>AAPL</Text>
        </View>
        <View style={styles.valuesContainer}>
          <Text style={styles.price}>190.84</Text>
          <Text style={styles.priceChange}>+4.69</Text>
        </View>
      </View>
      <View style={styles.mover}>
        <View style={styles.symbolContainer}>
          <Text style={styles.downSymbol}>▼</Text>
          <Text style={styles.symbolText}>MSTR</Text>
        </View>
        <View style={styles.valuesContainer}>
          <Text style={styles.price}>1290.22</Text>
          <Text style={styles.priceChangeDown}>-132.23</Text>
        </View>
      </View>
      <View style={styles.mover}>
        <View style={styles.symbolContainer}>
          <Text style={styles.upSymbol}>▲</Text>
          <Text style={styles.symbolText}>NVDA</Text>
        </View>
        <View style={styles.valuesContainer}>
          <Text style={styles.price}>1190.42</Text>
          <Text style={styles.priceChange}>+89.79</Text>
        </View>
      </View>
      <View style={styles.mover}>
        <View style={styles.symbolContainer}>
          <Text style={styles.downSymbol}>▼</Text>
          <Text style={styles.symbolText}>MSFT</Text>
        </View>
        <View style={styles.valuesContainer}>
          <Text style={styles.price}>336.84</Text>
          <Text style={styles.priceChangeDown}>-20.69</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 16,
    padding: 20,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  mover: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  symbolContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  upSymbol: {
    color: 'green',
    fontSize: 18,
    marginRight: 5,
  },
  downSymbol: {
    color: 'red',
    fontSize: 18,
    marginRight: 5,
  },
  symbolText: {
    fontSize: 18,
    color: 'white',
  },
  valuesContainer: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 18,
    color: 'white',
  },
  priceChange: {
    fontSize: 18,
    color: 'green',
  },
  priceChangeDown: {
    fontSize: 18,
    color: 'red',
  },
});

export default Square;
