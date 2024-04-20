import { StyleSheet, Text, View, Button } from 'react-native';
import { useLayoutEffect } from 'react';

export default function AboutScreen({navigation, route}) {
    const {name} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name
    })
  },
  [navigation, name]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
      <Button title='Update the name' onPress={() => navigation.setParams({name: "Ottooo"})}/>
      <Button title='Go back with data' onPress={() => navigation.navigate("Home", {result: "Data from about"})}/>
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
