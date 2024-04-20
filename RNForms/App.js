import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Switch, Button, Modal, Pressable } from 'react-native';
import { useState } from "react";
import LoginForm from "./components/LoginForm";

export default function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isDarkMode, setDarkMode] = useState(false); // Dodano stanje za praćenje moda
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Odgovarajući stilovi za tamni i svjetli način rada
  const containerStyle = isDarkMode ? styles.containerDark : styles.containerLight;
  const textStyle = isDarkMode ? styles.textDark : styles.textLight;
  const placeholderColor = isDarkMode ? '#888' : '#999';
  const inputBorderColor = isDarkMode ? '#fff' : '#000';

  return (
    <SafeAreaView style={[containerStyle, styles.container]}>
      <TextInput 
        style={[styles.input, {borderColor: inputBorderColor}]} 
        value={name} 
        onChangeText={setName} 
        placeholder='email@example.com'
        placeholderTextColor={placeholderColor}/>
      <Text style={[styles.text, textStyle]}>Zovem se {name}</Text>
      <TextInput 
        style={[styles.input, {borderColor: inputBorderColor}]} 
        value={password} 
        onChangeText={setPassword} 
        placeholder='password' 
        placeholderTextColor={placeholderColor} 
        secureTextEntry/>
      <Text style={[styles.text, textStyle]}>Lozinka {password}</Text>
      <TextInput 
        style={[styles.input, {borderColor: inputBorderColor}]} 
        value={number} 
        onChangeText={setNumber} 
        placeholder='numeric keyboard type' 
        placeholderTextColor={placeholderColor}
        keyboardType='numeric' 
        autoCorrect={false} 
        autoCapitalize='none'/>
      <Text style={[styles.text, textStyle]}>Broj mobitela {number}</Text>
      <TextInput
        style={[styles.input, styles.multilineText, {borderColor: inputBorderColor}]} 
        placeholder='opis '
        placeholderTextColor={placeholderColor} 
        multiline 
        textAlignVertical='top'/>
      <View style={styles.switchContainer}>
        <Text style={[styles.text, textStyle]}>Tamni način</Text>
        <Switch value={isDarkMode} onValueChange={() => setDarkMode((previousState) => !previousState)}
        trackColor={{false: "#767577", true: "#722F37"}}
        thumbColor="#f4f3f4"/>
      </View>

      <View style={styles.loginFormButton}>
        <Pressable style={styles.loginButton} onPress={() => setIsModalVisible(true)}>
          <Text style={styles.textLoginButton}>PRIJAVA</Text>
        </Pressable>
      </View>

      <Modal 
          visible={isModalVisible} 
          onRequestClose={() => setIsModalVisible(false)}
          animationType="slide"
          presentationStyle="formSheet"
        >
          <LoginForm></LoginForm> 

      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  containerLight: {
    backgroundColor: '#fff',
  },
  containerDark: {
    backgroundColor: '#333',
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
  textLight: {
    color: '#000',
  },
  textDark: {
    color: '#fff',
  },
  multilineText: {
    minHeight: 100,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  loginButton: {
    alignItems: 'center',
    borderRadius: 10,
    borderColor: "#722F37",
    borderWidth: 4,
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: "white",
    elevation: 4,
  },
  textLoginButton: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#722F37',
    lineHeight: 21,
  },
  loginFormButton: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 40,
  }
});
