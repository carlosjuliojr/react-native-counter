import React from 'react';
import { View, StyleSheet } from 'react-native';


export const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={[styles.box, styles.blackBox]}/>
        <View style={[styles.box, styles.greenBox]}/>
        <View style={[styles.box, styles.yellowBox]}/>
        <View style={[styles.box, styles.blueBox]}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
         
    },
    box: {
        width: 100,
        height: 100,
    },
    blueBox: {
        width: 100,
        height: 100,
        backgroundColor:'blue',
    },
    greenBox: {
        backgroundColor:'green',
    },
    yellowBox: {
        backgroundColor:'yellow',
    },
    blackBox: {
        backgroundColor:'#000000',
    },
});
