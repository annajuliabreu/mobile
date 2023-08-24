import { StyleSheet, View, Text } from 'react-native';
import Questao01 from './components/tarefa01/questao01';
import Questao03 from './components/tarefa01/questao03';
// import State from './components/06State';
// import HelloRN from './components/01HelloRNV1';
// import HelloRNV2 from './components/02HelloRNV2';
// import MyCat from './components/03MyCat';
// import Parent from './components/05Nested/05Parent';


export default function App() {
  return (
    <View style={styles.container}>
      {/* >>>>> tarefa 01 */}
      <Questao01 />
      <Questao03 cor='blue'/>

      {/* ------------------ */}

      {/* >>>>>>> sala de aula */}
      {/* <Text style={styles.title}>Made for Jesus - John Pantana</Text> */}
      {/* <HelloRN /> */}
      {/* <HelloRNV2 /> */}
      {/* <MyCat /> */}
      {/* <Parent/> */}
      {/* <State /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //usar tela toda 1=100%
    flexDirection: 'column', //justifyContent obedece a coluna e 
    // backgroundColor: '#fff',
    backgroundColor: '#c0c0c0',
    color:'black',
    alignItems: 'center', //alignItens obedece a linha 
    justifyContent: 'center',
    // marginTop: 50
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "pink"
  }
});


// anotações:

// npx expo start - comando para inicializar no terminal

// n existe arquivo css em aplicacao nativa!!
// existe o objeto stylesheet (classe/biblioteca) "emulação do css"
// ele recebe como parametro um objeto {} JSON / objeto Js
// dentro eu defino o que for equivalente a uma classe css
// "uma propriedade num objeto cujo valor recebe outro objeto"