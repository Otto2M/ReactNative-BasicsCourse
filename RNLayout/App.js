import { StyleSheet, Text, View } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{backgroundColor: "gray", borderRadius: 8, flexShrink: 1}}>Box 1 shrink</Box>
      <Box style={{backgroundColor: "green", borderRadius: 8, flexShrink: 1}}>Box 2 shrink</Box>
      {/* <Box style={{backgroundColor: "tan", borderRadius: 8, flexBasis: 140}}>Box 3</Box>
      <Box style={{backgroundColor: "black", borderRadius: 8}}>Box 4</Box>
      <Box style={{backgroundColor: "midnightblue", borderRadius: 8}}>Box 5</Box> */}
    </View>
  );
}

//alignSelf i alignContent ne mogu se zajedno kombinirati
// alignSelf -> dolazi za svaki element zasebno, tj. lokalno, a ne globalno

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",

    //height: 300,
    //flexWrap: "wrap",
    // alignContent: 'stretch',

    //rowGap and columnGap example
    // rowGap: 15,
    // columnGap: 10,
    gap: 10,

    // flex wrap options example
    // flexWrap: "wrap",
    // flexDirection: "row",
    marginTop: 84,
    borderWidth: 6,
    borderColor: "black",
    borderRadius: 16,
    margin: 10,
    // justifyContent: 'space-evenly',
    alignItems: "flex-start"
  },
});
