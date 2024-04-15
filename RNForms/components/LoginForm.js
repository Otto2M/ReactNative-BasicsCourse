import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Button } from 'react-native';
import { useState } from "react";

export default function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
        <View style={styles.form}>
            <Text style={styles.label}> Korisničko ime</Text>
            <TextInput  
                style={styles.input} 
                placeholder='Unesite korisničko ime' 
                value={username} 
                onChangeText={setUsername}/>
            <Text style={styles.label}>Lozinka</Text>
            <TextInput  style={styles.input} 
                placeholder='Unesite lozinku' 
                secureTextEntry
                value={password} 
                onChangeText={setPassword} />
            <Button title='Prijavi se' onPress={() => {}}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: "f5f5f5"
    },
    form: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    label: {
        fontSize: 15,
        marginBottom: 5,
        fontWeight: "bold",
    },
    input: {
        height: 40,
        borderColor: "#722F37",
        borderWidth: 2,
        borderRadius: 15,
        marginBottom: 15,
        padding: 10,
    }
});
