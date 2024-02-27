import { FlatList, SafeAreaView} from 'react-native';
import Person from './src/components/person/person';

export default function App() {
  //simulando uma lista de pessoa
  const peopleList = [
    {id: 1, name: "Marcelo", age: '19'},
    {id: 2, name: "Carlos", age: '37'},
    {id: 3, name: "Eduardo", age: '47'},
    {id: 4, name: "Marcio", age: '29'}
  ]
  return (
   <SafeAreaView>
    {/* para Android */}
    {/* <StatusBar/> */}

    {/* usando flatList */}
    <FlatList 
    data={peopleList}
    keyExtractor={(item) => item.id}

    renderItem={({item}) => (
      //Exibe cada item da lista
      <Person name={item.name} age={item.age}/>
    )}
    />
   </SafeAreaView>
  );
}