import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const[count, setCount] = useState(0)

  //função de incremento
  const incremento = () => {
    setCount(count + 1)
  }

  const descremento = () => {
    setCount(count - 1);
  }
  //effect 

  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`)
  }, [count])
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Contador: {count}</Text>

      <TouchableOpacity style={styles.btn} onPress={incremento}>
        <Text style={styles.text}>Incrementar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={descremento}>
        <Text style={styles.text}>Decrementar</Text>
      </TouchableOpacity>

      <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btn: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center'
  },
  text: {
    color: 'white',
    fontSize: 16
  }
});
