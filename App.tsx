import React from 'react';
import {SafeAreaView} from 'react-native';
import { CounterM3Screen } from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';

import IonIcon from 'react-native-vector-icons/Ionicons';
import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen';
import { PositionScreen } from './src/presentation/screens/PositionScreen';
import { FlexDirectionScreen } from './src/presentation/screens/FlexDirectionScreen';
import { HomeworkScreenTask6 } from './src/presentation/screens/HomeworkScreenTask6';


export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <IonIcon {...props} />
      }}
    >
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name='Julio Jaimes Rodriguez'/> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen/> */}
        {/* <PositionScreen/> */}
        {/* <FlexDirectionScreen/> */}
        {/* <HomeworkScreenTask1/> */}
        {/* <HomeworkScreenTask2/> */}
        {/* <HomeworkScreenTask4/> */}
        {/* <HomeworkScreenTask5/> */}
        <HomeworkScreenTask6/>
      </SafeAreaView>
    </PaperProvider>


  );
};
