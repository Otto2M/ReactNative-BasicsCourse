import { useState } from "react";
import { View, Text, Image, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert, StyleSheet } from "react-native";
import Greet from "./components/Greet";
const logoImg = require("./assets/favicon.png");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <ScrollView style={{flex: 1, backgroundColor: "tan", padding: 60}}>
      <StatusBar backgroundColor="black" barStyle={"dark-content"}/>
      <Greet name="Otto M.M." />
      <Text>Bok, 
        <Text style={{fontStyle: "italic", fontWeight: "bold"}}> Otto!</Text>
      </Text>
      {/* <Pressable onPress={(console.log("Slika kliknuta!"))}>
        <Image source={logoImg} style={{width: 300, height: 300}}></Image>
      </Pressable> */}
       <Image source={logoImg} style={{width: 300, height: 300}}></Image>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
        mollit anim id est laborum.</Text>
        <Button title="Klikni me" onPress={() => setIsModalVisible(true)}/>
        <Modal 
          visible={isModalVisible} 
          onRequestClose={() => setIsModalVisible(false)}
          animationType="slide"
          presentationStyle="formSheet"
        >
          <View style={{flex: 1, backgroundColor: "lightblue", padding: 60}}>
            <Text>Modal content</Text>
            <Button title="Zatvori" color="midnightblue" onPress={() => setIsModalVisible(false)}/>
          </View>
        </Modal>
        <ActivityIndicator size="small" color="black" />
        <View style={styles.container}>
          <Button title="Upozorenje" onPress={() => Alert.alert("Netočni podaci!")} />
          <Button title="Upozorenje s opisom" onPress={() => Alert.alert("Netočni podaci!", "Ponovite unos podataka")} />
          <Button title="Upozorenje 3" onPress={() => Alert.alert("Netočni podaci!", "Ponovite unos podataka", [
            {text: 'Prekid', onPress: () => console.log("Pritisnut prekid")}, 
            {text: 'OK', onPress: () => console.log("Kliknuto: OK")}
            ])} />
        </View>

        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
        mollit anim id est laborum.</Text>

        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
        mollit anim id est laborum.</Text>

        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
        mollit anim id est laborum.</Text>
        
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});