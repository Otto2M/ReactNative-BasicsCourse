import {View, Text, StyleSheet, Platform, Image, Modal, Button} from 'react-native';
import { useState } from "react";

export default function FoodCard({
    name,
    image,
    placeOfOrigin,
    preparationTime,
    difficultyOfPreparation,
    mainIngredients
}) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <View style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.preparationTime}>⏱️ {preparationTime}</Text>
            </View>

            <Image source={image} style={styles.image} resizeMode='contain' />

            <Button title="Detalji..." color="tan" onPress={() => setIsModalVisible(true)}/>
            <Modal 
                visible={isModalVisible} 
                onRequestClose={() => setIsModalVisible(false)}
                animationType="slide"
                presentationStyle="formSheet"
            >
                <View style={styles.moreInfoWindow}>
                <Text style={styles.name}>{name}</Text>
                    <View style={styles.placeContainer}>
                        <Text style={styles.placeOfOrigin}>Porijeklo jela: {placeOfOrigin}</Text>
                        <Text style={styles.difficultyOfPreparation}>Težina pripreme: {difficultyOfPreparation}</Text>
                    </View>

                    <View style={styles.ingerdientsContainer}>
                        <Text style={styles.mainIngredients}>Glavni sastojci: {mainIngredients.join(", ")}</Text>
                    </View>
                    <Button title="Zatvori" color="black" onPress={() => setIsModalVisible(false)}/>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#585858",
        borderRadius: 20,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowOffset: {width: 2, height: 2},
                shadowColor: "black",
                shadowOpacity: 0.7,
                shadowRadius: 5,
            },
            android: {
                eleveation: 5,
            }
        })
    },
    cardTitle: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
    },
    nameContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    preparationTime: {
        alignContent: 'center',
        fontSize: 22,
        marginTop: 20,
        color: "white",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 4,
        borderColor: "tan",
    },
    image: {
        width: "auto",
        height: 400,
        marginTop: 20,
        marginBottom: 20,
    },
    moreInfoWindow: {
        flex: 1, 
        backgroundColor: "tan", 
        padding: 30,
    },
    placeContainer: {
        // marginBottom: 10,
        // alignContent: 'center'
        alignContent: 'center',
        fontSize: 22,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 3,
        borderBottomWidth: 6,
        borderColor: "#585858",
        marginTop: 40,
        marginBottom: 20,
    },
    placeOfOrigin: {
        fontSize: 18,
    },
    difficultyOfPreparation: {
        fontSize: 18,
    },
    ingerdientsContainer: {
        marginBottom: 16,
        padding: 10,
        borderWidth: 3,
        borderBottomWidth: 6,
        borderColor: "#585858",
        borderRadius: 20,
    },
    mainIngredients: {
        fontSize: 18,
        fontWeight: "400",
    }
})