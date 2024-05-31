import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import Square from '../components/Square'; // Ensure the correct import path

export default function HomeScreen() {
  return (
    <ImageBackground source={require('../assets/background.png')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.welcomeText}>Welcome, Connor</Text>
          <Text style={styles.portfolioStatus}>You are Up $4,200 or 33%</Text>
          <Text style={styles.dateText}>Today, Wednesday May 29th</Text>
        </View>
        <View style={styles.searchContainer}>
          <Text style={styles.searchText}>Ask Your Quant Anything...</Text>
        </View>
        <View style={styles.mainContainer}>
          <Square />
          <View style={styles.portfolioCard}>
            <Text style={styles.portfolioValue}>$69,420</Text>
            <Text style={styles.portfolioChange}>+24.9% Day</Text>
            <Text style={styles.portfolioYTD}>+140.9% YTD</Text>
          </View>
          <View style={styles.moversContainer}>
            <Text style={styles.moversTitle}>Today's Top Movers</Text>
            <View style={styles.mover}>
              <Text style={styles.moverSymbol}>AAPL</Text>
              <Text style={styles.moverChange}>4.20% 190.84 +4.69</Text>
            </View>
            <View style={styles.mover}>
              <Text style={styles.moverSymbol}>MSTR</Text>
              <Text style={styles.moverChange}>-3.69% 1290.22 -132.23</Text>
            </View>
            <View style={styles.mover}>
              <Text style={styles.moverSymbol}>NVDA</Text>
              <Text style={styles.moverChange}>+2.20% 1190.42 +89.79</Text>
            </View>
            <View style={styles.mover}>
              <Text style={styles.moverSymbol}>MSFT</Text>
              <Text style={styles.moverChange}>-2.30% 336.84 -20.69</Text>
            </View>
          </View>
          <View style={styles.newsContainer}>
            <Text style={styles.newsTitle}>Top News Headlines</Text>
            <Text style={styles.newsItem}>Trump Considering An Advisory Role For Musk</Text>
            <Text style={styles.newsItem}>Apple reiterated as BofA's Top Pick for AI Upgrades</Text>
            <Text style={styles.newsItem}>Can NVIDIA's AI Chip Dominance Continue?</Text>
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
    padding: 20,
    paddingTop: 80,
    paddingBottom: 120,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  portfolioStatus: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
  },
  dateText: {
    fontSize: 16,
    color: 'white',
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
  },
  portfolioCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  portfolioValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  portfolioChange: {
    fontSize: 18,
    color: 'green',
    marginBottom: 5,
  },
  portfolioYTD: {
    fontSize: 18,
    color: 'green',
  },
  moversContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  moversTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  mover: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  moverSymbol: {
    fontSize: 16,
    color: 'white',
  },
  moverChange: {
    fontSize: 16,
    color: 'white',
  },
  newsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 20,
    borderRadius: 10,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  newsItem: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
});
