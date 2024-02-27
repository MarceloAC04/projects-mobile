import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
      style={styles.image}
      source={require('./src/assets/download.jpg')}
      />

      <Text style={styles.text}>Hello World!</Text>

      <TextInput
      style={styles.input}
      defaultValue = "Exemplo de input"
      />

      <TouchableOpacity style={styles.btn}>
        <Text>Exemplo de botao</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDE100',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
  text: {
    color: 'Black',
    fontSize: 50,
    fontWeight: 'bold',
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#FDE100',
    backgroundColor: 'grey',
    paddingLeft: 5,
  },
  image: {
    width: "95%",
    height: "40%"
  },
  btn: {
    borderColor: 'Black',
    width: '70%',
    height: 40, 
    borderWidth: 1,
    paddingLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 5
  }
});
