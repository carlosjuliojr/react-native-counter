import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {PrimaryButton} from '../components';
import { globalStyles } from '../theme/global.styles';
import { FAB } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

export const CounterM3Screen = () => {

const [count, setCount] = useState(1);

  return (
    <View style={globalStyles.centerContainer}>
        <Text style= {globalStyles.title}>{count}</Text>
        {/* <Icon name="accessibility-outline" size={ 25 }/> */}
        <FAB
            //label="+1"
            style={ globalStyles.fab }
            onPress={ () => setCount(count + 1)}
            onLongPress={ () => setCount(0) }
            icon="add"
        />
    </View>
  );
};
