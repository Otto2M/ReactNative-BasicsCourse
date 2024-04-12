import {View, Text, StyleSheet, Platform, Image} from 'react-native';

export default function FoodCard({
    name,
    image,
    placeOfOrigin,
    preparationTime,
    difficultyOfPreparation,
    mainIngredients
}) {
    return (
        <View style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.preparationTime}>⏱️ {preparationTime}</Text>
            </View>

            <Image source={image} style={styles.image} resizeMode='contain' />

            <View style={styles.placeContainer}>
                <Text style={styles.placeOfOrigin}>Porijeklo jela: {placeOfOrigin}</Text>
                <Text style={styles.difficultyOfPreparation}>Težina pripreme:</Text><Text style={{ fontWeight: "bold", fontSize: 15 }}>{difficultyOfPreparation}</Text>
            </View>

            <View style={styles.ingerdientsContainer}>
                <Text style={styles.mainIngredients}>Glavni sastojci: {mainIngredients.join(", ")}</Text>
            </View>
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
    placeContainer: {
        marginBottom: 10,
    },
    placeOfOrigin: {
        fontSize: 20,
        marginRight: 12,
    },
    difficultyOfPreparation: {
        fontSize: 15,
        flexWrap: 'nowrap',
    },
    ingerdientsContainer: {
        marginBottom: 16,
    },
    mainIngredients: {
        fontSize: 17,
        fontWeight: "bold",
    },
})