import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState } from 'react';

export default function App() {
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)

useEffect(() => {
  (async () => {
    const {status: cameraStatus} = await Camera.requestCameraPermissionsAsync()
  })();
},[])


  return (
    <View style={styles.container}>
      <Camera 
      type={cameraType}
      style={styles.camera}
      
      >
        <View style={styles.viewFlip}>
          <TouchableOpacity style={styles.bntFLip} onPress={() => setCameraType(cameraType == CameraType.front ? CameraType.back : CameraType.front)}>
            <Text style={styles.txtFlip}>Trocar</Text>
          </TouchableOpacity>
        </View>
      </Camera>
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
  camera: {
    flex: 1,
    height: '80%',
    width: '100%'
  },
  viewFlip: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  bntFLip: {
    padding: 15
  },
  txtFlip: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20
  }
});
