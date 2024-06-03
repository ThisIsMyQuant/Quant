import React from 'react';
import VerticalSquares from './VerticalSquares';
import Tall from './Tall';
import StockTile from './Square/StockTile';
import { StyleSheet, View } from 'react-native';

const TwoTall: React.FC = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <StockTile />
            <Tall />
        </View>
    );
};

export default TwoTall;