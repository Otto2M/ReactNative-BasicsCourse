import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Pressable, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useState } from "react";

export default function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {}

        if(!username) errors.username = "Korisničko ime je obavezno!";
        if(!password) errors.password = "Lozinka je obavezna!";

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const handleSubmit = () => {
        if(validateForm()) {
            console.log("Submitted", username, password);
            setUsername("");
            setPassword("");
            setErrors({});
        }
    };

  return (
    <KeyboardAvoidingView 
        behavior="padding" 
        keyboardVerticalOffset={Platform.OS === 'ios' ? 200 : 0} 
        style={styles.container}>
        <View style={styles.form}>
            <Image source={require("../assets/adaptive-icon.png" )} style={styles.image}/>
            <Text style={styles.label}> Korisničko ime</Text>
            <TextInput  
                style={styles.input} 
                placeholder='Unesite korisničko ime' 
                value={username} 
                onChangeText={setUsername}/>
            {
                errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null
            }
            <Text style={styles.label}>Lozinka</Text>
            <TextInput  style={styles.input} 
                placeholder='Unesite lozinku' 
                secureTextEntry
                value={password} 
                onChangeText={setPassword} />
            {
                errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null
            }
            <View style={styles.logInBtnContainer}>
                <Pressable style={styles.logInBtn} onPress={(handleSubmit)}>
                    <Text style={styles.logInTxt}>Prijavi se</Text>
                </Pressable>
            </View>
        </View>
    </KeyboardAvoidingView>
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
    },
    logInBtnContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    logInBtn: {
        alignItems: 'center',
        borderRadius: 15,
        borderColor: "#722F37",
        borderWidth: 4,
        paddingVertical: 12,
        paddingHorizontal: 32,
        backgroundColor: "white",
        shadowOpacity: 0.6,
        shadowRadius: 14,
        shadowColor: "#AA8287",
        elevation: 4,
      },
      logInTxt: {
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 0.5,
        color: '#722F37',
        lineHeight: 21,
      },
      image: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginBottom: 50,
      },
      errorText: {
        color: "red",
        marginBottom: 10,
      }
});
