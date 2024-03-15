import { View, StyleSheet } from 'react-native';

export const HomeworkScreenTask3 = () => {
    return (
      <View style={styles.container}>
          <View style={[styles.box, styles.purpleBox]}/>
          <View style={[styles.box, styles.orangeBox]}/>
          <View style={[styles.box, styles.blueBox]}/>
      </View>
    );
  };

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: '#28425B',
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems: 'center',
      },
      box: {
          width: 100,
          height: 100,
          borderWidth: 10,
          borderColor: 'white',
      },
      purpleBox: {
          backgroundColor:'#5856D6',
          marginTop:-200,
      },
      orangeBox: {
          backgroundColor:'#F0A23B',
      },
      blueBox: {
          backgroundColor:'#06e9ddc3',
          marginTop:-400,
      },
  });
