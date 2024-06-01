import React from 'react';
import { StyleSheet, View } from 'react-native';
import VerticalSquares from './VerticalSquares';

const FourSquare = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>  
        <VerticalSquares />
        <VerticalSquares />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',   
    width: 400,
    height: 400,
    marginBottom: 20,
  },
  square: {
    width: '50%',
    height: '50%',
    padding: 6,
  },
});

export default FourSquare;
