import { StyleSheet, View, SafeAreaView, Platform, ScrollView } from 'react-native';
import FoodCard from './components/FoodCard';

export default function App() {

  const aglioeOlioData = {
    name: "Tjestenina Aglio e olio",
    image: require("./assets/Aglio-Olio.jpg"),
    placeOfOrigin: "Italija",
    preparationTime: "15 minuta",
    difficultyOfPreparation: "jednostavno",
    mainIngredients: ["Špagete (no. 13)", "maslinovo ulje", "češnjak", "chili papričice", "peršin"],
  }; 

  const pizzaData = {
    name: "Pizza ",
    image: require("./assets/pizza.jpeg"),
    placeOfOrigin: "Italija",
    preparationTime: "15 minuta",
    difficultyOfPreparation: "srednje teške",
    mainIngredients: ["Špagete (no. 13)", "maslinovo ulje", "češnjak", "chili papričice", "peršin"],
  };

  const beefsteakData = {
    name: "Beefsteak",
    image: require("./assets/beefsteak.jpeg"),
    placeOfOrigin: "Argentina",
    preparationTime: "5-15 minuta",
    difficultyOfPreparation: "jednostavno",
    mainIngredients: ["Špagete (no. 13)", "maslinovo ulje", "češnjak", "chili papričice", "peršin"],
  };

  return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <FoodCard {...aglioeOlioData}/>
          <FoodCard {...pizzaData}/>
          <FoodCard {...beefsteakData}/>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tan',
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },

});
