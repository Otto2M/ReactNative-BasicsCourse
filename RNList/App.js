import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView, FlatList } from 'react-native';
import foodList from "./foodData.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
      {
        foodList.map(food => {
          return (
            <View style={styles.card} key={food.foodName}>
              <Text style={styles.cardText}>{food.foodName}</Text>
              <Text>{food.foodType}</Text>
              <Text>{food.calories}</Text>
            </View>
          )
        })
      }
      </ScrollView> */}
      <View style={styles.scrollView}>
      <FlatList 
        data={foodList}
        renderItem={({item}) => {
          return (
            <View style={styles.card} key={item.foodName}>
              <Text style={styles.cardText}>{item.foodName}</Text>
              <Text>{item.foodType}</Text>
              <Text>{item.calories}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.foodName.toString()}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "tan",
    marginBottom: 16,
  },
  cardText: {
    fontSize: 18,
  },
});
