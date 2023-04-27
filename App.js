import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-web';

export default function App() {

  cont [bikes, setBikes] = userState([]);

  function getBikes(){
    let host = "http://localhost:3000/";
    let endpoit = "bikes";
    let url = host + endpoit;

    fetch(url)
    .then(response => response.json())
    .then(result => {
      setBikes(result)
    });
  }
  useEffect(() => {
    getBikes();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Bikes</Text>

      <FlatList data = {bikes} renderItem = { ({bike}) => (<Text>{bike.name}</Text>)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
