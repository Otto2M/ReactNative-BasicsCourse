import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen({navigation, route}) {
  // const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <Text style={styles.text}>{route.params?.result}</Text>
      <Button title='Go to About' onPress={() => navigation.navigate("About", {
        name: "Otto",
      })}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  }
});
