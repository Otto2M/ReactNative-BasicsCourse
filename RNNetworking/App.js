import { SafeAreaView, StatusBar, View, StyleSheet, FlatList, Text, ActivityIndicator, TextInput, Button } from 'react-native';
import { useState, useEffect} from "react";

export default function App() {

  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async (limit = 10) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
      const data = await response.json()

      setPostList(data);
      setIsLoading(false);
      setError("");
    } catch (error) {
      console.error("Greška prilikom dohvaćanja podataka: ", error);
      setIsLoading(false);
      setError("Nije moguće učitati podatke!");
    }
    
  };

  const handleRefresh = () => {
    setRefreshing(true)
    fetchData(20)
    setRefreshing(false)
  };

  const addPost = async () => {
    setIsPosting(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: postTitle,
          body: postBody
        })
      });
      const newPost = await response.json()
      setPostList([newPost, ...postList])
      setPostTitle("")
      setPostBody("")
      setIsPosting(false)
      setError("");
    } catch (error) {
      console.error("Pgreška prilikom dodavanja novog zapisa: ", error);
      setError("Nije moguće dodati novi zapis!");
    }
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
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ): (
      <>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Naslov' value={postTitle} onChangeText={setPostTitle}/>
        <TextInput style={styles.input} placeholder='Opis' value={postBody} onChangeText={setPostBody}/>
        <Button title={isPosting ? "Dodavanje..." : "Dodaj post"} onPress={addPost} disabled={isPosting}/>
      </View>
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
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      </View>
      </>
    )}
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
  inputContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
    padding: 8,
  },
  errorContainer: {
    backgroundColor: "#FFC0CB",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    alignItems: 'center',
  },
  errorText: {
    color: "#D8000C",
    fontSize: 16,
    textAlign: 'center',
  },
});
