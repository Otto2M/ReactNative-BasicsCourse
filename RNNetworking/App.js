import { SafeAreaView, StatusBar, View, StyleSheet, FlatList, Text, ActivityIndicator } from 'react-native';
import { useState, useEffect} from "react";

export default function App() {

  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (limit = 10) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    const data = await response.json()

    setPostList(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []
  );

  if(isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size='large' color="ffff00" />
          <Text>Učitavanje...</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList 
          data= {postList}
          renderItem={({item}) => {
            return (
              <View style={styles.card}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.bodyText}>{item.body}</Text>
              </View>
            );
          }}
          ItemSeparatorComponent={<View style={{ height: 16 }}/>}
          ListEmptyComponent={<Text style={styles.noItemsFound} >Nema pronađenih stavki</Text>}
          ListHeaderComponent={<Text style={styles.headerText}>Post List</Text>}
          ListFooterComponent={<Text style={styles.footerText}>Kraj liste</Text>}
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
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#722F37"
  },
  titleText: {
    fontSize: 20,
  },
  bodyText: {
    fontSize: 15,
    color: "#666666"
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 12,
  },
  noItemsFound: {
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: "100%"
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
