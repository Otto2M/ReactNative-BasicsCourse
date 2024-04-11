import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import CustomButton from "./components/CustomButton/CustomButton";

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Dobrodošli!</Text>
          <CustomButton title="Press me" onPress={() => alert("Pressed!")}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "tan",
  },
  container: {
    flex: 1,
    backgroundColor: 'tan',
    paddingTop: Platform.OS === "android" ? 25 : 0
  },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios: {
        color: "green",
        fontSize: 25,
        fontStyle: "italic",
      },
      android: {
        color: "blue",
        fontSize: 30,
      },
    }),
    fontWeight: "bold",
    textAlign: "center",
  }
});
