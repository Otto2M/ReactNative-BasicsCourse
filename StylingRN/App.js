import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}> StyleSheet API</Text>
      </View>
      <View style={[styles.firstBox, styles.box, styles.boxShadow]}>
        <Text>Lightblue box</Text>
      </View>
      <View style={[styles.secondBox, styles.box, styles.boxShadow]}>
        <Text>Lightgreen box</Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    margin: 20,
  },
  box: {
    width: 200,
    height: 200,
    padding: 10,
    margin: 8,
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 20,
    borderLeftWidth: 15,
  },
  firstBox: {
    backgroundColor: "gray",
  }, 
  secondBox: {
    backgroundColor: "lightgreen",
  }, 
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5,
  }
});
