import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView, FlatList, SectionList } from 'react-native';
import foodList from "./foodData.json";
import groupedFoodList from "./grouped-data.json";

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
      {/* <FlatList 
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
        ItemSeparatorComponent={<View style={{ height: 16 }}/>}
        ListEmptyComponent={<Text style={styles.noItemsFound} >Nema pronađenih stavki</Text>}
        ListHeaderComponent={<Text style={styles.headerText}>McDonald's popis hrane</Text>}
        ListFooterComponent={<Text style={styles.footerText}>Kraj popisa</Text>}
      /> */}
      <SectionList 
      sections={groupedFoodList}
      renderItem={( {item} ) => {
        return (
          <View style={styles.card}>
            <Text style={styles.cardText}>{item}</Text>
          </View>
        )
      }}
      renderSectionHeader={( {section}) => (
        <Text style={styles.sectionHeaderText}>{section.foodType}</Text>
      )}
      ItemSeparatorComponent={() => <View style={{ height: 16 }}/>}
      SectionSeparatorComponent={() => <View style={{ height: 16 }}/>}
      >

      </SectionList>
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
    // marginBottom: 16,
  },
  cardText: {
    fontSize: 18,
  },
  noItemsFound: {
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: "100%"
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 17,
  },
  footerText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 12,
  },
  sectionHeaderText: {
    backgroundColor: "white",
    fontSize: 24,
    fontWeight: "bold",
  }
});
