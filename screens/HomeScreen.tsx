import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import Header from '../components/header';
import Square from '../components/Square';
import VerticalSquares from '../components/VerticalSquares';
import FourSquare from '../components/FourSquare';
import Tall from '../components/Tall'; 
import TwoTall from '../components/TwoTall';
import StockTile from '../components/Square/StockTile';

export default function HomeScreen() {
  return (
    <ImageBackground source={require('../assets/bkgrnd.png')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header />
        <View style={styles.searchContainer}>
          <Text style={styles.searchText}>Ask Your Quant nything...</Text>
        </View>

        <View style={styles.mainContainer}>
          <TwoTall />
          <StockTile />
          <FourSquare />
          <Tall />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>  
          
          <VerticalSquares />
          </View>

          
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollContainer: {
    paddingTop: 80,
    paddingBottom: 120,
    paddingHorizontal: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  searchContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  searchText: {
    color: 'white',
    textAlign: 'center',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 15,
  },
});
