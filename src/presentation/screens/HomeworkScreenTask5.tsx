import { View, StyleSheet } from "react-native";

export const HomeworkScreenTask5 = () => {
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
          flexDirection: 'row',
          justifyContent:'space-between',
      },
      box: {
          width: 100,
          height: 100,
          borderWidth: 10,
          borderColor: 'white',
      },
      purpleBox: {
          backgroundColor:'#5856D6',
          height:'auto',
      },
      orangeBox: {
          backgroundColor:'#F0A23B',
          height:'auto',
      },
      blueBox: {
          backgroundColor:'#06e9ddc3',
          height:'auto',
      },
  });
