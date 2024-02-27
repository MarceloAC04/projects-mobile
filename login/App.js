import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image
        style={styles.img}
        source={require('./assets/letter.jpg')}
      />

      <Text style={styles.title}>Login</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        defaultValue='Digite seu email' />
      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        defaultValue='Digite sua senha' />

      <TouchableOpacity
        style={styles.btn}>
        <Text style={{ color: "#fff", fontWeight: 'bold' }}>Login</Text>
      </TouchableOpacity>
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
    gap: 10
  },
  img: {
    height: '40%',
    width: '70%',
    backgroundColor: 'transparent'
  },
  title: {
    color: 'Black',
    fontSize: 30,
    fontWeight: 'bold',
    color: "#fff",
    backgroundColor: '#b51d45',
    padding: 10,
    borderRadius: 12,
    textAlign: 'center'
  },
  label: {
    marginRight: 275,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    backgroundColor: 'transparent',
    paddingLeft: 5,
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
    marginTop: 5,
    backgroundColor: '#b51d45',
    borderRadius: 10
  }
});
