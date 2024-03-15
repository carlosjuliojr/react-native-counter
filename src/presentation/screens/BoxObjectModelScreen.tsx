import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            BoxObjectModelScreen
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        
    },
    title: {
        margin: 20,
        paddingVertical: 5,
        paddingHorizontal: 5,
        backgroundColor:'blue',
        fontSize: 40,
    },
});
