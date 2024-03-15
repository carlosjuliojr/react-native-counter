import { View, StyleSheet } from "react-native";

export const HomeworkScreenTask6 = () => {
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
          flexDirection: 'column',
      },
      box: {
          width: 'auto',
          height: 100,
          borderWidth: 10,
          borderColor: 'white',
      },
      purpleBox: {
        flex : 1,
           
            backgroundColor:'#5856D6',
      },
      orangeBox: {
        flex: 1,
            
            backgroundColor:'#F0A23B',
      },
      blueBox: {
        flex: 3,
           
            backgroundColor:'#06e9ddc3',
      },
  });
