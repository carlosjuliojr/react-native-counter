import React from 'react';
import { View, StyleSheet } from 'react-native';


export const PositionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.blackBox}/>
        <View style={styles.greenBox}/>
        <View style={styles.yellowBox}/>
        <View style={styles.blueBox}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',

    },
    blueBox: {
        width: 100,
        height: 100,
        backgroundColor:'blue',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    greenBox: {
        width: 100,
        height: 100,
        backgroundColor:'green',
        position:'absolute',
        bottom:0,
    },
    yellowBox: {
        width: 100,
        height: 100,
        backgroundColor:'yellow',
        position: 'absolute',
        right:0,
    },
    blackBox: {
        width: 100,
        height: 100,
        backgroundColor:'#000000',
    },
});
