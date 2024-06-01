import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome, Connor</Text>
          <Text style={styles.portfolioStatus}>You are Up $4,200 or 33%</Text>
          <Text style={styles.dateText}>Today, Wednesday May 29th</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        fontFamily: 'System',
        alignItems: 'center',
        color: 'white',
        marginBottom: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5,
      },
      portfolioStatus: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5,
      },
      dateText: {
        fontSize: 24,
        color: 'white',
      },
  });
export default Header;