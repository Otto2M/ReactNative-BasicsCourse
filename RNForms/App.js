import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Switch, Button, Modal, Pressable } from 'react-native';
import { useState } from "react";
import LoginForm from "./components/LoginForm";

export default function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isDarkMode, setDarkMode] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
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
