import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Switch } from 'react-native';
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isDarkMode, setDarkMode] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder='email@example.com'/>
      <Text style={styles.text}>Zovem se {name}</Text>
      <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder='password' secureTextEntry/>
      <Text style={styles.text}>Lozinka {password}</Text>
      <TextInput 
        style={styles.input} 
        value={number} 
        onChangeText={setNumber} 
        placeholder='numeric keyboard type' 
        keyboardType='numeric' 
        autoCorrect={false} 
        autoCapitalize='none'/>
      <Text style={styles.text}>Broj mobitela {number}</Text>
      <TextInput 
        style={[styles.input, styles.multilineText]} 
        placeholder='opis ' 
        multiline 
        textAlignVertical='top'/>
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Tamni način</Text>
        <Switch value={isDarkMode} onValueChange={() => setDarkMode((previousState) => !previousState)}
        trackColor={{false: "#767577", true: "plum"}}
        thumbColor="#f4f3f4"/>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 14,
  },
  text: {
    fontSize: 30,
    padding: 10,
  },
  multilineText: {
    minHeight: 100,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  }
});
