import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as Notifications from 'expo-notifications'

//solicitar as permissões de notificação ao iniciar o app
Notifications.requestPermissionsAsync();

//Definir como as notificações devem ser tratadas ao ser recebidas
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,

    shouldPlaySound: true,

    //numero de notificação no icone do app
    shouldSetBadge: true,
  }),
})

export default function App() {
  //função para lidar com a chamada da notificação
  const handleCallNotification = async () => {

    const {status} = await Notifications.getPermissionsAsync();

    //verifica se o usuário concedeu permissão para notificações
    if (status !== "granted") {
      alert("Você não deixou as notificações ativas.")
      return;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Hello World!",
        body: "Criando uma POC para implementar expo notifications",
        sound: 'default'
      },
      trigger: null
    })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => handleCallNotification()}>
        <Text style={styles.text}>Notificação</Text>
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
  },
  button: {
    width: "80%",
    height: 80,
    backgroundColor: "red",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold"
  }
});
