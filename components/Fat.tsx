import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Fat = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top News Headlines</Text>
      <Text style={styles.newsItem}>Trump Considering An Advisory Role For Musk</Text>
      <Text style={styles.newsItem}>Apple reiterated as BofA's Top Pick for AI Upgrades</Text>
      <Text style={styles.newsItem}>Can NVIDIA's AI Chip Dominance Continue?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    padding: 20,
    borderRadius: 16,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    color: '#ffffff',
    width: 400,
  },
  header: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  newsItem: {
    marginBottom: 10,
    fontSize: 18,
    color: '#ffffff',
  }
});

export default Fat;