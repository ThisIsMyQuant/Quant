import React from 'react';
import { StyleSheet, View } from 'react-native';
import Square from './Square'; // Adjust the import path according to your file structure

const VerticalSquares = () => {
  return (
    <View style={styles.container}>
      <Square />
      <Square />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 15, 
  },
});

export default VerticalSquares;
