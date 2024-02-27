import { useFonts,Poppins_600SemiBold, Poppins_800ExtraBold, Poppins_600SemiBold_Italic } from '@expo-google-fonts/poppins';
import { Inter_500Medium} from '@expo-google-fonts/inter';
import { StyleSheet, Text, View } from "react-native";

//Component person
//Prpos: name, age

const Person = ({name, age}) => {
  let [fontsLoaded, fontError] = useFonts({
     Poppins_600SemiBold, 
     Inter_500Medium,
     Poppins_800ExtraBold,
     Poppins_600SemiBold_Italic
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
    return(
        <View style={styles.container}>
            <Text style={{fontFamily: 'Poppins_600SemiBold_Italic'}}>Nome: {name}</Text>
            <Text style={{fontFamily: 'Inter_500Medium'}}>Idade: {age}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#fde100',
    borderRadius: 8,
    padding: 10,
    borderColor: 'Black',
    borderWidth: 2,
    width: 370,
    margin: 10,
  }
});


export default Person;