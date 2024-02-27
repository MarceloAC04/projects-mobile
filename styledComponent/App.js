import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container } from './src/components/Container/Container';
import { Texto, Titulo } from './src/components/Title/Title';
import { Button, DescrementBtn } from './src/components/Button/Button';

export default function App() {
  const [count, setCount] = useState(0)

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
    <Container>

      <Titulo>Contador: {count}</Titulo>

      <Button onPress={incremento}>
        <Texto>Incrementar</Texto>
      </Button>

      <DescrementBtn onPress={descremento}>
        <Texto>Decrementar</Texto>
      </DescrementBtn>

      <StatusBar />
    </Container>
  );
}

